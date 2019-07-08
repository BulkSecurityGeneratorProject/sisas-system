package com.minea.sisas.repository;

import com.minea.sisas.domain.SistemaAgua;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the SistemaAgua entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SistemaAguaRepository extends JpaRepository<SistemaAgua, Long>, JpaSpecificationExecutor<SistemaAgua> {

}
