package com.minea.sisas.service;


import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specifications;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.github.jhipster.service.QueryService;

import com.minea.sisas.domain.Municipio;
import com.minea.sisas.domain.*; // for static metamodels
import com.minea.sisas.repository.MunicipioRepository;
import com.minea.sisas.service.dto.MunicipioCriteria;

import com.minea.sisas.service.dto.MunicipioDTO;
import com.minea.sisas.service.mapper.MunicipioMapper;

/**
 * Service for executing complex queries for Municipio entities in the database.
 * The main input is a {@link MunicipioCriteria} which get's converted to {@link Specifications},
 * in a way that all the filters must apply.
 * It returns a {@link List} of {@link MunicipioDTO} or a {@link Page} of {@link MunicipioDTO} which fulfills the criteria.
 */
@Service
@Transactional(readOnly = true)
public class MunicipioQueryService extends QueryService<Municipio> {

    private final Logger log = LoggerFactory.getLogger(MunicipioQueryService.class);


    private final MunicipioRepository municipioRepository;

    private final MunicipioMapper municipioMapper;

    public MunicipioQueryService(MunicipioRepository municipioRepository, MunicipioMapper municipioMapper) {
        this.municipioRepository = municipioRepository;
        this.municipioMapper = municipioMapper;
    }

    /**
     * Return a {@link List} of {@link MunicipioDTO} which matches the criteria from the database
     * @param criteria The object which holds all the filters, which the entities should match.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public List<MunicipioDTO> findByCriteria(MunicipioCriteria criteria) {
        log.debug("find by criteria : {}", criteria);
        final Specifications<Municipio> specification = createSpecification(criteria);
        return municipioMapper.toDto(municipioRepository.findAll(specification));
    }

    /**
     * Return a {@link Page} of {@link MunicipioDTO} which matches the criteria from the database
     * @param criteria The object which holds all the filters, which the entities should match.
     * @param page The page, which should be returned.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public Page<MunicipioDTO> findByCriteria(MunicipioCriteria criteria, Pageable page) {
        log.debug("find by criteria : {}, page: {}", criteria, page);
        final Specifications<Municipio> specification = createSpecification(criteria);
        final Page<Municipio> result = municipioRepository.findAll(specification, page);
        return result.map(municipioMapper::toDto);
    }

    /**
     * Function to convert MunicipioCriteria to a {@link Specifications}
     */
    private Specifications<Municipio> createSpecification(MunicipioCriteria criteria) {
        Specifications<Municipio> specification = Specifications.where(null);
        if (criteria != null) {
            if (criteria.getId() != null) {
                specification = specification.and(buildSpecification(criteria.getId(), Municipio_.id));
            }
            if (criteria.getNmMunicipio() != null) {
                specification = specification.and(buildStringSpecification(criteria.getNmMunicipio(), Municipio_.nmMunicipio));
            }
        }
        return specification;
    }

}
