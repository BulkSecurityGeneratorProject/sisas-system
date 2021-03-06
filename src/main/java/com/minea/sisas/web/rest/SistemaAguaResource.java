package com.minea.sisas.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.minea.sisas.domain.SistemaAgua;
import com.minea.sisas.repository.SistemaAguaRepository;
import com.minea.sisas.security.AuthoritiesConstants;
import com.minea.sisas.service.SistemaAguaService;
import com.minea.sisas.web.rest.errors.BadRequestAlertException;
import com.minea.sisas.web.rest.util.HeaderUtil;
import com.minea.sisas.web.rest.util.PaginationUtil;
import com.minea.sisas.service.dto.SistemaAguaDTO;
import com.minea.sisas.service.dto.SistemaAguaCriteria;
import com.minea.sisas.service.SistemaAguaQueryService;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

/**
 * REST controller for managing SistemaAgua.
 */
@RestController
@RequestMapping("/api")
public class SistemaAguaResource {

    private final Logger log = LoggerFactory.getLogger(SistemaAguaResource.class);

    private static final String ENTITY_NAME = "sistemaAgua";

    private final SistemaAguaService sistemaAguaService;

    private final SistemaAguaQueryService sistemaAguaQueryService;

    private final SistemaAguaRepository sistemaAguaRepository;

    public SistemaAguaResource(SistemaAguaService sistemaAguaService, SistemaAguaQueryService sistemaAguaQueryService, SistemaAguaRepository sistemaAguaRepository) {
        this.sistemaAguaService = sistemaAguaService;
        this.sistemaAguaQueryService = sistemaAguaQueryService;
        this.sistemaAguaRepository=sistemaAguaRepository;
    }

    /**
     * POST  /sistema-aguas : Create a new sistemaAgua.
     *
     * @param sistemaAguaDTO the sistemaAguaDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new sistemaAguaDTO, or with status 400 (Bad Request) if the sistemaAgua has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/sistema-aguas")
    @Timed
    public ResponseEntity<SistemaAguaDTO> createSistemaAgua(@Valid @RequestBody SistemaAguaDTO sistemaAguaDTO) throws URISyntaxException {
        log.debug("REST request to save SistemaAgua : {}", sistemaAguaDTO);
        if (sistemaAguaDTO.getId() != null) {
            throw new BadRequestAlertException("A new sistemaAgua cannot already have an ID", ENTITY_NAME, "idexists");
        }
        //sistemaAguaDTO.setDtLancamento(LocalDate.now()); //SETANDO DATA DE LANCAMENTO DEFAUT
        sistemaAguaDTO.setStatus(true);
        SistemaAguaDTO result = sistemaAguaService.save(sistemaAguaDTO);
        return ResponseEntity.created(new URI("/api/sistema-aguas/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /sistema-aguas : Updates an existing sistemaAgua.
     *
     * @param sistemaAguaDTO the sistemaAguaDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated sistemaAguaDTO,
     * or with status 400 (Bad Request) if the sistemaAguaDTO is not valid,
     * or with status 500 (Internal Server Error) if the sistemaAguaDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/sistema-aguas")
    @Timed
    public ResponseEntity<SistemaAguaDTO> updateSistemaAgua(@Valid @RequestBody SistemaAguaDTO sistemaAguaDTO) throws URISyntaxException {
        log.debug("REST request to update SistemaAgua : {}", sistemaAguaDTO);
        if (sistemaAguaDTO.getId() == null) {
            return createSistemaAgua(sistemaAguaDTO);
        }
        sistemaAguaDTO.setDtUltimaAlteracao(LocalDate.now());
        sistemaAguaDTO.setStatus(false);
        SistemaAguaDTO result = sistemaAguaService.save(sistemaAguaDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, sistemaAguaDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /sistema-aguas : get all the sistemaAguas.
     *
     * @param pageable the pagination information
     * @param criteria the criterias which the requested entities should match
     * @return the ResponseEntity with status 200 (OK) and the list of sistemaAguas in body
     */
    @GetMapping("/sistema-aguas")
    @Timed
    public ResponseEntity<List<SistemaAguaDTO>> getAllSistemaAguas(SistemaAguaCriteria criteria, Pageable pageable) {
        log.debug("REST request to get SistemaAguas by criteria: {}");
        Page<SistemaAguaDTO> page = sistemaAguaService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/sistema-aguas");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    @GetMapping("/sistema-aguas/nomeFiltro")
    public ResponseEntity<List<SistemaAguaDTO>> getByNome(@RequestParam(value = "nome") String nome, Pageable pageable) {
        Page<SistemaAguaDTO> page = sistemaAguaRepository.buscarPorNome(nome, pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/sistema-aguas");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    @GetMapping("/sistema-aguas/municipioFiltro")
    public ResponseEntity<List<SistemaAgua>> getByMunicipio(@RequestParam(value = "nome") String nome) {
        List<SistemaAgua> page = sistemaAguaRepository.findAllByMunicipioNmMunicipioEquals(nome);
        return new ResponseEntity<>(page, null, HttpStatus.OK);
    }

    @GetMapping("/sistema-aguas/provinciaFiltro")
    public ResponseEntity<List<SistemaAgua>> getByProvincia(@RequestParam(value = "nome") String nome) {
        List<SistemaAgua> page = sistemaAguaRepository.findAllByProvinciaNmProvinciaEquals(nome);
        return new ResponseEntity<>(page, null, HttpStatus.OK);
    }

    @GetMapping("/sistema-aguas/comunaFiltro")
    public ResponseEntity<List<SistemaAgua>> getByComuna(@RequestParam(value = "nome") String nome) {
        List<SistemaAgua> page = sistemaAguaRepository.findAllByComunaNmComunaEquals(nome);
        return new ResponseEntity<>(page, null, HttpStatus.OK);
    }

    @GetMapping("/sistema-aguas/periodoFiltro")
    public ResponseEntity<List<SistemaAgua>> getByPeriodo(@RequestParam(value = "dtInicial") String dtInicial, @RequestParam(value = "dtFinal") String dtFinal) throws ParseException {
        List<SistemaAgua> page = sistemaAguaRepository.getAllBetweenDates(LocalDate.parse(dtInicial), LocalDate.parse(dtFinal));
        return new ResponseEntity<>(page, null, HttpStatus.OK);
    }

    /**
     * GET  /sistema-aguas/:id : get the "id" sistemaAgua.
     *
     * @param id the id of the sistemaAguaDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the sistemaAguaDTO, or with status 404 (Not Found)
     */
    @GetMapping("/sistema-aguas/{id}")
    @Timed
    public ResponseEntity<SistemaAguaDTO> getSistemaAgua(@PathVariable Long id) {
        log.debug("REST request to get SistemaAgua : {}", id);
        SistemaAguaDTO sistemaAguaDTO = sistemaAguaService.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(sistemaAguaDTO));
    }

    /**
     * DELETE  /sistema-aguas/:id : delete the "id" sistemaAgua.
     *
     * @param id the id of the sistemaAguaDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/sistema-aguas/{id}")
    @Timed
    public ResponseEntity<Void> deleteSistemaAgua(@PathVariable Long id) {
        log.debug("REST request to delete SistemaAgua : {}", id);
        SistemaAgua sistemaAgua = this.sistemaAguaRepository.findOne(id);
        if (Objects.nonNull(sistemaAgua)) {
            sistemaAgua.setStatus(false);
            this.sistemaAguaRepository.save(sistemaAgua);
        }
        //sistemaAguaService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
