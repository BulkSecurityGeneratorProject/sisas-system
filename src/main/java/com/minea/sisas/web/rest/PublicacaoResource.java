package com.minea.sisas.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.minea.sisas.service.PublicacaoService;
import com.minea.sisas.web.rest.errors.BadRequestAlertException;
import com.minea.sisas.web.rest.util.HeaderUtil;
import com.minea.sisas.web.rest.util.PaginationUtil;
import com.minea.sisas.service.dto.PublicacaoDTO;
import com.minea.sisas.service.dto.PublicacaoCriteria;
import com.minea.sisas.service.PublicacaoQueryService;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Publicacao.
 */
@RestController
@RequestMapping("/api")
public class PublicacaoResource {

    private final Logger log = LoggerFactory.getLogger(PublicacaoResource.class);

    private static final String ENTITY_NAME = "publicacao";

    private final PublicacaoService publicacaoService;

    private final PublicacaoQueryService publicacaoQueryService;

    public PublicacaoResource(PublicacaoService publicacaoService, PublicacaoQueryService publicacaoQueryService) {
        this.publicacaoService = publicacaoService;
        this.publicacaoQueryService = publicacaoQueryService;
    }

    /**
     * POST  /publicacaos : Create a new publicacao.
     *
     * @param publicacaoDTO the publicacaoDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new publicacaoDTO, or with status 400 (Bad Request) if the publicacao has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/publicacaos")
    @Timed
    public ResponseEntity<PublicacaoDTO> createPublicacao(@Valid @RequestBody PublicacaoDTO publicacaoDTO) throws URISyntaxException {
        log.debug("REST request to save Publicacao : {}", publicacaoDTO);
        if (publicacaoDTO.getId() != null) {
            throw new BadRequestAlertException("A new publicacao cannot already have an ID", ENTITY_NAME, "idexists");
        }
        PublicacaoDTO result = publicacaoService.save(publicacaoDTO);
        return ResponseEntity.created(new URI("/api/publicacaos/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /publicacaos : Updates an existing publicacao.
     *
     * @param publicacaoDTO the publicacaoDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated publicacaoDTO,
     * or with status 400 (Bad Request) if the publicacaoDTO is not valid,
     * or with status 500 (Internal Server Error) if the publicacaoDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/publicacaos")
    @Timed
    public ResponseEntity<PublicacaoDTO> updatePublicacao(@Valid @RequestBody PublicacaoDTO publicacaoDTO) throws URISyntaxException {
        log.debug("REST request to update Publicacao : {}", publicacaoDTO);
        if (publicacaoDTO.getId() == null) {
            return createPublicacao(publicacaoDTO);
        }
        PublicacaoDTO result = publicacaoService.save(publicacaoDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, publicacaoDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /publicacaos : get all the publicacaos.
     *
     * @param pageable the pagination information
     * @param criteria the criterias which the requested entities should match
     * @return the ResponseEntity with status 200 (OK) and the list of publicacaos in body
     */
    @GetMapping("/publicacaos")
    @Timed
    public ResponseEntity<List<PublicacaoDTO>> getAllPublicacaos(PublicacaoCriteria criteria, Pageable pageable) {
        log.debug("REST request to get Publicacaos by criteria: {}", criteria);
        Page<PublicacaoDTO> page = publicacaoQueryService.findByCriteria(criteria, pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/publicacaos");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /publicacaos/:id : get the "id" publicacao.
     *
     * @param id the id of the publicacaoDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the publicacaoDTO, or with status 404 (Not Found)
     */
    @GetMapping("/publicacaos/{id}")
    @Timed
    public ResponseEntity<PublicacaoDTO> getPublicacao(@PathVariable Long id) {
        log.debug("REST request to get Publicacao : {}", id);
        PublicacaoDTO publicacaoDTO = publicacaoService.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(publicacaoDTO));
    }

    /**
     * DELETE  /publicacaos/:id : delete the "id" publicacao.
     *
     * @param id the id of the publicacaoDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/publicacaos/{id}")
    @Timed
    public ResponseEntity<Void> deletePublicacao(@PathVariable Long id) {
        log.debug("REST request to delete Publicacao : {}", id);
        publicacaoService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
