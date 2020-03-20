package com.minea.sisas.repository;

import com.minea.sisas.domain.Provincia;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * Spring Data JPA repository for the Provincia entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RelatorioRepository extends JpaRepository<Provincia, Long>, JpaSpecificationExecutor<Provincia> {

    //COBERTURA SERVICOS DE AGUA (Nível Provincial)
    @Query(value = "SELECT p.NM_PROVINCIA,       " +
        "( SELECT  COUNT(m.id_municipio) FROM sisas.municipio m      " +
        "  WHERE m.ID_PROVINCIA = p.ID_PROVINCIA        " +
        ") NumeroMunicipios,      " +
        "( SELECT COUNT(c.ID_comuna)  FROM sisas.comuna c       " +
        "  WHERE m.id_municipio = c.id_municipio      " +
        ") NumeroComunas,      " +
        " (       SELECT     COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)       " +
        "               FROM     sisas.sistema_agua s       " +
        "               WHERE     s.ID_PROVINCIA = p.ID_PROVINCIA      " +
        "                  AND     s.POSSUI_SISTEMA_AGUA = 1      " +
        "              AND     s.estado_funcionamento_sistema = 'Está em funcionamento (Bom)'      " +
        "          ) NrSistemasFuncionam,      " +
        "      p.populacao,      " +
        "       ( SELECT      COALESCE(sum(QTD_HABITANTES_ACESSO_SERVICO_AGUA),2)      " +
        "               FROM   sisas.sistema_agua s       " +
        "               WHERE  s.ID_PROVINCIA = p.ID_PROVINCIA      " +
        "               AND     s.POSSUI_SISTEMA_AGUA = 1                   " +
        "        ) NrBeneficiariosSistemaAgua,         " +
        "      ROUND((( ((SELECT     ((COALESCE(sum(QTD_HABITANTES_ACESSO_SERVICO_AGUA),2)*100)/p.populacao)      " +
        "               FROM     sisas.sistema_agua s       " +
        "               WHERE     s.ID_PROVINCIA = p.ID_PROVINCIA      " +
        "                AND     s.POSSUI_SISTEMA_AGUA = 1      " +
        "        )))),2) PercentagemCobertura       " +
        "FROM sisas.sistema_agua s      " +
        "    INNER JOIN sisas.provincia p on s.ID_PROVINCIA = p.ID_PROVINCIA      " +
        "    INNER JOIN sisas.municipio m ON s.ID_MUNICIPIO  = m.ID_MUNICIPIO       " +
        "    WHERE s.POSSUI_SISTEMA_AGUA = 1   " +
        "   GROUP BY       " +
        "       p.NM_PROVINCIA, p.ID_PROVINCIA,      " +
        "       m.ID_MUNICIPIO", nativeQuery = true)
    List<Object[]> coberturaServicosAguaProvincial();

    //COBERTURA SERVICOS DE AGUA (Nível Municipal)
    @Query(value = "SELECT p.NM_PROVINCIA,   " +
        "        m.NM_MUNICIPIO,   " +
        "      ( SELECT    COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)   " +
        "            FROM    sisas.sistema_agua s    " +
        "            WHERE    s.ID_PROVINCIA = p.ID_PROVINCIA   " +
        "              AND    s.ID_MUNICIPIO = m.ID_MUNICIPIO   " +
        "              AND    s.POSSUI_SISTEMA_AGUA = 1   " +
        "        ) NrSistemas,    " +
        "         p.populacao,    " +
        "       ( SELECT     COALESCE(sum(QTD_HABITANTES_ACESSO_SERVICO_AGUA),2)   " +
        "            FROM   sisas.sistema_agua s    " +
        "            WHERE  s.ID_PROVINCIA = p.ID_PROVINCIA   " +
        "             AND s.ID_MUNICIPIO = m.ID_MUNICIPIO   " +
        "            AND    s.POSSUI_SISTEMA_AGUA = 1    " +
        "       ) NrHabAcessoAgua,   " +
        "      ROUND((( ((SELECT    ((COALESCE(sum(QTD_HABITANTES_ACESSO_SERVICO_AGUA),2)*100)/p.populacao)   " +
        "            FROM    sisas.sistema_agua s    " +
        "            WHERE    s.ID_PROVINCIA = p.ID_PROVINCIA   " +
        "              AND    s.ID_MUNICIPIO = m.ID_MUNICIPIO   " +
        "              AND    s.POSSUI_SISTEMA_AGUA = 1   " +
        "       )))),2) PercentagemCobertura   " +
        "FROM sisas.sistema_agua s   " +
        "    INNER JOIN sisas.provincia p on s.ID_PROVINCIA = p.ID_PROVINCIA   " +
        "    INNER JOIN sisas.municipio m on p.ID_PROVINCIA = m.ID_PROVINCIA    " +
        "    WHERE     s.POSSUI_SISTEMA_AGUA = 1  AND s.ID_PROVINCIA = :provinciaId    " +
        "GROUP BY    " +
        "       p.NM_PROVINCIA, p.ID_PROVINCIA,    " +
        "       m.NM_MUNICIPIO, m.ID_MUNICIPIO  ", nativeQuery = true)
    List<Object[]> coberturaServicosAguaMunicipal(@Param("provinciaId") Long provinciaId);

    //COBERTURA SERVICOS DE AGUA (Nível Comunal)
    @Query(value ="SELECT p.NM_PROVINCIA,  " +
        "     m.NM_MUNICIPIO,  " +
        "        c.NM_COMUNA,  " +
        " (  SELECT COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)  " +
        "   FROM sisas.sistema_agua s   " +
        "   WHERE s.ID_PROVINCIA = p.ID_PROVINCIA  " +
        "     AND s.ID_MUNICIPIO = m.ID_MUNICIPIO  " +
        "     AND s.ID_COMUNA = c.ID_COMUNA  " +
        "     AND s.POSSUI_SISTEMA_AGUA = 1  " +
        "  ) NrSistemas,  " +
        "          p.populacao,   " +
        "       ( SELECT  COALESCE(sum(QTD_HABITANTES_ACESSO_SERVICO_AGUA),2)  " +
        "   FROM   sisas.sistema_agua s   " +
        "   WHERE  s.ID_PROVINCIA = p.ID_PROVINCIA  " +
        "          AND s.ID_MUNICIPIO = m.ID_MUNICIPIO  " +
        "   AND s.ID_COMUNA = c.ID_COMUNA  " +
        "   AND s.POSSUI_SISTEMA_AGUA = 1      " +
        "    ) NrHabAcessoAgua,    " +
        "      ROUND((( ((SELECT ((COALESCE(sum(QTD_HABITANTES_ACESSO_SERVICO_AGUA),2)*100)/p.populacao)  " +
        "   FROM sisas.sistema_agua s   " +
        "   WHERE s.ID_PROVINCIA = p.ID_PROVINCIA  " +
        "     AND s.ID_MUNICIPIO = m.ID_MUNICIPIO  " +
        "     AND s.ID_COMUNA = c.ID_COMUNA  " +
        "     AND s.POSSUI_SISTEMA_AGUA = 1  " +
        "    )))),2) PercentagemCobertura  " +
        "FROM sisas.sistema_agua s  " +
        "    INNER JOIN sisas.provincia p ON s.ID_PROVINCIA = p.ID_PROVINCIA  " +
        "    INNER JOIN sisas.municipio m ON  p.ID_PROVINCIA = m.ID_PROVINCIA   " +
        "    INNER JOIN sisas.comuna c ON  s.ID_COMUNA = c.ID_COMUNA  " +
        "    WHERE s.ID_PROVINCIA = :provinciaId  " +
        "GROUP BY   " +
        "       p.NM_PROVINCIA, p.ID_PROVINCIA,   " +
        "    m.NM_MUNICIPIO, m.ID_MUNICIPIO ,  " +
        "    c.NM_COMUNA, c.ID_COMUNA ", nativeQuery = true)
    List<Object[]> coberturaServicosAguaComunal(@Param("provinciaId") Long provinciaId);

    //FUNCIONAMENTO DE SISTEMA DE AGUA E CHAFARIZES - PROVINCIAL
    @Query(value = "SELECT p.NM_PROVINCIA," +
        " p.populacao," +
        " (" +
        " SELECT COALESCE(COUNT(Esquema),2)" +
        " FROM sistema_agua s " +
        " WHERE s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "  AND	s.Esquema = 'Poço/cacimba melhorada'" +
        "   ) PocoMelhorado, " +
        "     ( " +
        " SELECT COALESCE(COUNT(Esquema),2)" +
        " FROM	sistema_agua s " +
        " WHERE	s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "  AND	s.Esquema = 'Furo'" +
        "   ) Furo," +
        "      ( " +
        " SELECT COUNT(POSSUI_SISTEMA_AGUA)" +
        " FROM	sistema_agua s  " +
        " WHERE	s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "  AND	s.Esquema = 'Nascente'" +
        "   )  Nascente," +
        "      ( " +
        "		SELECT	COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)" +
        "	FROM	sistema_agua s " +
        "	WHERE	s.ID_PROVINCIA = p.ID_PROVINCIA " +
        "     AND   s.NM_TP_FONTE = 'Subterrânea' " +
        "      AND   NM_TP_BOMBA_ENERGIA = 'Diesel/Motobomba'" +
        "     AND   s.POSSUI_SISTEMA_AGUA = 1 " +
        " ) NrSistemasDiesel, " +
        " (" +
        " SELECT	COALESCE(COUNT(NM_TP_BOMBA_ENERGIA),2)" +
        "	FROM	sistema_agua s" +
        "	WHERE	s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "      AND   s.NM_TP_FONTE = 'Subterrânea'" +
        "      AND   NM_TP_BOMBA_ENERGIA = 'Diesel/Motobomba'" +
        "     AND   s.POSSUI_SISTEMA_AGUA = 1" +
        " ) NrTotaldeSistemaDisel," +
        " ROUND((( ((SELECT	((COALESCE(sum(s.QTD_HABITANTES_ACESSO_SERVICO_AGUA),0)*100)/p.populacao)" +
        "	FROM	sisas.sistema_agua s " +
        "	WHERE	s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "     AND	s.NM_TP_FONTE = 'Subterrânea'" +
        "       AND   NM_TP_BOMBA_ENERGIA = 'Diesel/Motobomba'" +
        "      AND   s.POSSUI_SISTEMA_AGUA = 1" +
        " )))),2) PercentagemAcessoBombaDiesel," +
        " (" +
        " SELECT	COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)" +
        "	FROM	sistema_agua s" +
        "	WHERE	s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "      AND   s.NM_TP_FONTE = 'Subterrânea'" +
        "      AND   NM_TP_BOMBA_ENERGIA = 'Solar'" +
        "     AND   s.POSSUI_SISTEMA_AGUA = 1" +
        " ) NrSistemasSolar," +
        " (" +
        " SELECT	COALESCE(COUNT(NM_TP_BOMBA_ENERGIA),2)" +
        "	FROM	sistema_agua s " +
        "	WHERE	s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "     AND   s.NM_TP_FONTE = 'Subterrânea'" +
        "      AND   NM_TP_BOMBA_ENERGIA = 'Solar'" +
        "     AND   s.POSSUI_SISTEMA_AGUA = 1" +
        " ) NrTotaldeSistemaSolar," +
        " ROUND((( ((SELECT	((COALESCE(sum(s.QTD_HABITANTES_ACESSO_SERVICO_AGUA),0)*100)/p.populacao)" +
        "	FROM	sisas.sistema_agua s " +
        "	WHERE	s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "      AND	s.NM_TP_FONTE = 'Subterrânea'" +
        "       AND   NM_TP_BOMBA_ENERGIA = 'Solar'" +
        "      AND   s.POSSUI_SISTEMA_AGUA = 1" +
        " )))),2) PercentagemSistemaSolar," +
        " (" +
        " SELECT	COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)" +
        "	FROM	sistema_agua s " +
        "	WHERE	s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "      AND   s.NM_TP_FONTE = 'Subterrânea'" +
        "      AND   NM_TP_BOMBA_ENERGIA = 'Eólica'" +
        "     AND   s.POSSUI_SISTEMA_AGUA = 1" +
        " ) NrSistemasEolica," +
        " (" +
        " SELECT	COALESCE(COUNT(NM_TP_BOMBA_ENERGIA),2)" +
        "	FROM	sistema_agua s" +
        "	WHERE	s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "      AND   s.NM_TP_FONTE = 'Subterrânea'" +
        "      AND   NM_TP_BOMBA_ENERGIA = 'Eólica'" +
        "     AND   s.POSSUI_SISTEMA_AGUA = 1" +
        " ) NrTotaldeSistemaEolica," +
        " ROUND((( ((SELECT	((COALESCE(sum(s.QTD_HABITANTES_ACESSO_SERVICO_AGUA),0)*100)/p.populacao)" +
        "	FROM	sisas.sistema_agua s" +
        "	WHERE	s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "      AND	s.NM_TP_FONTE = 'Subterrânea'" +
        "       AND   NM_TP_BOMBA_ENERGIA = 'Eólica'" +
        "      AND   s.POSSUI_SISTEMA_AGUA = 1" +
        " )))),2) PercentagemSistemaEolica," +
        " (" +
        " SELECT	COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)" +
        "	FROM	sistema_agua s" +
        "	WHERE	s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "      AND   s.NM_TP_FONTE = 'Subterrânea'" +
        "      AND   NM_TP_BOMBA_ENERGIA = 'Eléctrica'" +
        "     AND   s.POSSUI_SISTEMA_AGUA = 1" +
        " ) NrSistemasElectrica," +
        " (" +
        " SELECT	COALESCE(COUNT(NM_TP_BOMBA_ENERGIA),2)" +
        "	FROM	sistema_agua s" +
        "	WHERE	s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "      AND   s.NM_TP_FONTE = 'Subterrânea'" +
        "      AND   NM_TP_BOMBA_ENERGIA = 'Eléctrica'" +
        "     AND   s.POSSUI_SISTEMA_AGUA = 1" +
        " ) NrTotaldeSistemaElectrica," +
        " ROUND((( ((SELECT	((COALESCE(sum(s.QTD_HABITANTES_ACESSO_SERVICO_AGUA),0)*100)/p.populacao)" +
        "	FROM	sisas.sistema_agua s" +
        "	WHERE	s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "      AND	s.NM_TP_FONTE = 'Subterrânea'" +
        "       AND   NM_TP_BOMBA_ENERGIA = 'Eléctrica'" +
        "      AND   s.POSSUI_SISTEMA_AGUA = 1" +
        " )))),2) PercentagemSistemaElectrica," +
        " (" +
        " SELECT	COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)" +
        "	FROM	sistema_agua s" +
        "	WHERE	s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "      AND   s.NM_TP_FONTE = 'Subterrânea'" +
        "      AND   NM_TP_BOMBA_ENERGIA = 'Outros'" +
        "     AND   s.POSSUI_SISTEMA_AGUA = 1" +
        " ) NrSistemasOutros," +
        " (" +
        " SELECT	COALESCE(COUNT(NM_TP_BOMBA_ENERGIA),2)" +
        "	FROM	sistema_agua s" +
        "	WHERE	s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "      AND   s.NM_TP_FONTE = 'Subterrânea'" +
        "      AND   NM_TP_BOMBA_ENERGIA = 'Outros'" +
        "     AND   s.POSSUI_SISTEMA_AGUA = 1" +
        " ) NrTotaldeSistemaOutros," +
        " ROUND((( ((SELECT	((COALESCE(sum(s.QTD_HABITANTES_ACESSO_SERVICO_AGUA),0)*100)/p.populacao)" +
        "	FROM	sisas.sistema_agua s" +
        "	WHERE	s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "      AND	s.NM_TP_FONTE = 'Subterrânea'" +
        "       AND   NM_TP_BOMBA_ENERGIA = 'Outros'" +
        "      AND   s.POSSUI_SISTEMA_AGUA = 1" +
        " )))),2) PercentagemSistemaOutros" +
        " from sistema_agua s " +
        " inner join provincia p on" +
        " s.ID_PROVINCIA = p.ID_PROVINCIA" +
        " GROUP BY" +
        " p.NM_PROVINCIA," +
        " p.ID_PROVINCIA", nativeQuery = true)
    List<Object[]> beneficiariosAguaBmbMecanicaProvincialQuery();

    //FUNCIONAMENTO DE SISTEMA DE AGUA E CHAFARIZES
    @Query(value = "SELECT p.NM_PROVINCIA," +
        "    m.NM_MUNICIPIO," +
        "          ( " +
        " SELECT COUNT(POSSUI_SISTEMA_AGUA)" +
        " FROM sisas.sistema_agua s " +
        " WHERE s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "  AND s.ID_MUNICIPIO = m.ID_MUNICIPIO" +
        "  AND s.POSSUI_SISTEMA_AGUA = 1" +
        "   ) NrSistemas, " +
        "     ( " +
        " SELECT COUNT(POSSUI_SISTEMA_AGUA)" +
        " FROM sisas.sistema_agua s " +
        " WHERE s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "  AND s.ID_MUNICIPIO = m.ID_MUNICIPIO" +
        "  AND s.POSSUI_SISTEMA_AGUA = 1" +
        "              AND s.estado_funcionamento_sistema = 'Está em funcionamento (Bom)'" +
        "   ) NrSistemasFuncionam," +
        "      ( " +
        " SELECT COUNT(POSSUI_SISTEMA_AGUA)" +
        " FROM sisas.sistema_agua s " +
        " WHERE s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "  AND s.ID_MUNICIPIO = m.ID_MUNICIPIO" +
        "  AND s.POSSUI_SISTEMA_AGUA = 1" +
        "              AND s.estado_funcionamento_sistema =  'Não está em funcionamento'" +
        "   )  NrSistemasNaoFuncionam," +
        " (      " +
        "      SELECT Sum(s.QTD_CHAFARISES_FUNCIONANDO) + Sum(s.qtd_chafarises_existentes)" +
        " FROM sisas.sistema_agua s " +
        " WHERE s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "       AND s.ID_MUNICIPIO = m.ID_MUNICIPIO" +
        "   )  NrChafarizes," +
        " (      " +
        "      SELECT Sum(s.QTD_CHAFARISES_FUNCIONANDO)" +
        " FROM sisas.sistema_agua s " +
        " WHERE s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "       AND s.ID_MUNICIPIO = m.ID_MUNICIPIO" +
        "   )  NrChafarizesFuncionam," +
        " (      " +
        "      SELECT   (Sum(s.qtd_chafarises_existentes) - Sum(s.QTD_CHAFARISES_FUNCIONANDO))" +
        " FROM sisas.sistema_agua s " +
        " WHERE s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "       AND s.ID_MUNICIPIO = m.ID_MUNICIPIO" +
        "   )  NrChafarizesNaoFuncionam " +
        " from sisas.sistema_agua s" +
        "     inner join sisas.provincia p on s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "     inner join sisas.municipio m on p.ID_PROVINCIA = m.ID_PROVINCIA " +
        " where s.ID_PROVINCIA = :provinciaId "+
        " GROUP BY " +
        "       p.NM_PROVINCIA," +
        "       m.ID_MUNICIPIO ", nativeQuery = true)
    List<Object[]> funcionamentoAguaChafarizesMunicipal(@Param("provinciaId") Long provinciaId);

    // DASHBOARD
    @Query(value = "SELECT p.NM_PROVINCIA," +
        "    ( " +
        " SELECT COUNT(POSSUI_SISTEMA_AGUA) " +
        " FROM sisas.sistema_agua s " +
        " WHERE s.ID_PROVINCIA = p.ID_PROVINCIA" +
        " AND s.POSSUI_SISTEMA_AGUA = 1" +
        " ) NrSistemas," +
        "    ( " +
        " SELECT COUNT(POSSUI_SISTEMA_AGUA) " +
        " FROM sisas.sistema_agua s " +
        " WHERE s.ID_PROVINCIA = p.ID_PROVINCIA" +
        " AND s.POSSUI_SISTEMA_AGUA = 1" +
        " AND s.estado_funcionamento_sistema = 'Está em funcionamento (Bom)'" +
        " ) NrSistemasQueFuncionam," +
        "       ROUND((( ((SELECT COUNT(POSSUI_SISTEMA_AGUA)" +
        "       FROM sisas.sistema_agua s " +
        "       WHERE s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "       AND s.estado_funcionamento_sistema = 'Está em funcionamento (Bom)'" +
        "   ))  *100)/ (SELECT COUNT(POSSUI_SISTEMA_AGUA)" +
        "               FROM sisas.sistema_agua s " +
        "               WHERE s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "   )),2) PercentagemQueFuncionam," +
        "   ( " +
        " SELECT COUNT(POSSUI_SISTEMA_AGUA) " +
        " FROM sisas.sistema_agua s " +
        " WHERE s.ID_PROVINCIA = p.ID_PROVINCIA" +
        " AND s.POSSUI_SISTEMA_AGUA = 1" +
        " AND s.estado_funcionamento_sistema = 'Não está em funcionamento'" +
        " ) NrSistemasQueNaoFuncionam,     " +
        "       ROUND((( ((SELECT COUNT(POSSUI_SISTEMA_AGUA)" +
        " FROM sisas.sistema_agua s " +
        " WHERE s.ID_PROVINCIA = p.ID_PROVINCIA" +
        " AND s.estado_funcionamento_sistema = 'Não está em funcionamento'" +
        "   ))  *100)/ (SELECT COUNT(POSSUI_SISTEMA_AGUA)" +
        " FROM sisas.sistema_agua s " +
        " WHERE s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "   )),2) PercentagemQueNaoFuncionam" +
        " FROM sisas.sistema_agua s" +
        "     INNER JOIN sisas.provincia p on s.ID_PROVINCIA = p.ID_PROVINCIA" +
        "     WHERE s.POSSUI_SISTEMA_AGUA = 1 AND s.ID_PROVINCIA = :provinciaId" +
        " GROUP BY " +
        "       p.NM_PROVINCIA," +
        "       p.ID_PROVINCIA ", nativeQuery = true)
    List<Object[]> dadosDashboard(@Param("provinciaId") Long provinciaId);

    //TRATAMENTO SISTEMAS AGUA PROVINCIAL
    @Query(value = "SELECT  p.NM_PROVINCIA,  " +
        "   ( SELECT COUNT(POSSUI_SISTEMA_AGUA)  " +
        "     FROM sisas.sistema_agua s   " +
        "     WHERE s.ID_PROVINCIA = p.ID_PROVINCIA  " +
        "     AND s.POSSUI_SISTEMA_AGUA = 1  " +
        " ) NrSistemasdeAgua,  " +
        "   (  SELECT COUNT(NM_TP_TRATAMENTO_AGUA)  " +
        "      FROM sisas.sistema_agua s   " +
        "      WHERE s.ID_PROVINCIA = p.ID_PROVINCIA  " +
        "       AND s.POSSUI_SISTEMA_AGUA = 1  " +
        "       AND s.NM_TP_TRATAMENTO_AGUA = 'Tratamento padrão' " +
        " ) NrSistemasPadrao,  " +
        " (  SELECT COUNT(NM_TP_TRATAMENTO_AGUA)  " +
        "    FROM sisas.sistema_agua s              " +
        "    WHERE s.ID_PROVINCIA = p.ID_PROVINCIA  " +
        "     AND s.POSSUI_SISTEMA_AGUA = 1  " +
        "     AND s.NM_TP_TRATAMENTO_AGUA = 'Tratamento básico-cloro' " +
        " ) NrSistemasBasicoCloro,  " +
        " (  SELECT COUNT(NM_TP_TRATAMENTO_AGUA)  " +
        "    FROM sisas.sistema_agua s   " +
        "    WHERE s.ID_PROVINCIA = p.ID_PROVINCIA  " +
        "     AND s.POSSUI_SISTEMA_AGUA = 1  " +
        "     AND s.NM_TP_TRATAMENTO_AGUA = 'Não realiza'" +
        " ) NrSistemasNãoRealiza  " +
        " FROM sisas.sistema_agua s  " +
        "     INNER JOIN sisas.provincia p ON s.ID_PROVINCIA = p.ID_PROVINCIA  " +
        " GROUP BY   " +
        "       p.NM_PROVINCIA,  " +
        "       p.ID_PROVINCIA  ", nativeQuery = true)
    List<Object[]> buscaDadosTratamentoSistemasAguaProvincial();

    @Query(value = " SELECT p.NM_PROVINCIA, m.NM_MUNICIPIO,  " +
        "   ( SELECT COUNT(POSSUI_SISTEMA_AGUA)   " +
        "            FROM    sisas.sistema_agua s    " +
        "            WHERE    s.ID_PROVINCIA = p.ID_PROVINCIA   " +
        "             AND    s.ID_MUNICIPIO = m.ID_MUNICIPIO   " +
        "             AND    s.POSSUI_SISTEMA_AGUA = 1   " +
        ") NrSistemasdeAgua,   " +
        "   ( SELECT COUNT(NM_TP_TRATAMENTO_AGUA)   " +
        "            FROM    sisas.sistema_agua s    " +
        "            WHERE    s.ID_PROVINCIA = p.ID_PROVINCIA   " +
        "             AND   s.ID_MUNICIPIO = m.ID_MUNICIPIO   " +
        "             AND    s.POSSUI_SISTEMA_AGUA = 1   " +
        "             AND   s.NM_TP_TRATAMENTO_AGUA = 'Tratamento padrão'   " +
        ") NrSistemasPadrao,   " +
        "(     SELECT COUNT(NM_TP_TRATAMENTO_AGUA)   " +
        "            FROM    sisas.sistema_agua s    " +
        "            WHERE    s.ID_PROVINCIA = p.ID_PROVINCIA   " +
        "             AND   s.ID_MUNICIPIO = m.ID_MUNICIPIO   " +
        "             AND    s.POSSUI_SISTEMA_AGUA = 1   " +
        "             AND   s.NM_TP_TRATAMENTO_AGUA = 'Tratamento básico-cloro'   " +
        ") NrSistemasBasicoCloro,   " +
        "(     SELECT COUNT(NM_TP_TRATAMENTO_AGUA)   " +
        "            FROM    sisas.sistema_agua s    " +
        "            WHERE    s.ID_PROVINCIA = p.ID_PROVINCIA   " +
        "             AND   s.ID_MUNICIPIO = m.ID_MUNICIPIO   " +
        "             AND    s.POSSUI_SISTEMA_AGUA = 1   " +
        "             AND   s.NM_TP_TRATAMENTO_AGUA = 'Não realiza'   " +
        " ) NrSistemasNãoRealiza   " +
        " FROM sisas.sistema_agua s   " +
        "     INNER JOIN sisas.provincia p on s.ID_PROVINCIA = p.ID_PROVINCIA   " +
        "     INNER JOIN sisas.municipio m on s.ID_MUNICIPIO = m.ID_MUNICIPIO   " +
        " WHERE s.ID_PROVINCIA = :provinciaId"+
        " GROUP BY    " +
        "       p.NM_PROVINCIA,   " +
        "       p.ID_PROVINCIA,    " +
        "       m.NM_MUNICIPIO,   " +
        "       M.ID_MUNICIPIO ", nativeQuery = true)
    List<Object[]> buscaDadosTratamentoSistemasAguaMunicipal(@Param("provinciaId") Long provinciaId);

    //COMUNAL
    @Query(value = " SELECT p.NM_PROVINCIA, m.NM_MUNICIPIO, c.NM_COMUNA,      " +
        "   ( SELECT COUNT(POSSUI_SISTEMA_AGUA)      " +
        "            FROM   sisas.sistema_agua s       " +
        "            WHERE  s.ID_PROVINCIA = p.ID_PROVINCIA      " +
        "             AND   s.ID_MUNICIPIO = m.ID_MUNICIPIO      " +
        "             AND   s.ID_COMUNA =   c.ID_COMUNA      " +
        "             AND   s.POSSUI_SISTEMA_AGUA = 1      " +
        ") NrSistemasdeAgua,      " +
        "   ( SELECT COUNT(NM_TP_TRATAMENTO_AGUA)      " +
        "            FROM   sisas.sistema_agua s       " +
        "            WHERE  s.ID_PROVINCIA = p.ID_PROVINCIA      " +
        "             AND   s.ID_MUNICIPIO = m.ID_MUNICIPIO      " +
        "             AND   s.ID_COMUNA =   c.ID_COMUNA      " +
        "             AND   s.POSSUI_SISTEMA_AGUA = 1      " +
        "             AND   s.NM_TP_TRATAMENTO_AGUA = 'Tratamento padrão'      " +
        ") NrSistemasPadrao,      " +
        "(      SELECT COUNT(NM_TP_TRATAMENTO_AGUA)      " +
        "              FROM  sisas.sistema_agua s       " +
        "              WHERE s.ID_PROVINCIA = p.ID_PROVINCIA      " +
        "              AND   s.ID_MUNICIPIO = m.ID_MUNICIPIO      " +
        "              AND   s.ID_COMUNA =   c.ID_COMUNA      " +
        "              AND   s.POSSUI_SISTEMA_AGUA = 1      " +
        "              AND   s.NM_TP_TRATAMENTO_AGUA = 'Tratamento básico-cloro'      " +
        ") NrSistemasBasicoCloro,      " +
        "(  SELECT     COUNT(NM_TP_TRATAMENTO_AGUA)      " +
        "              FROM  sisas.sistema_agua s       " +
        "              WHERE s.ID_PROVINCIA = p.ID_PROVINCIA      " +
        "              AND   s.ID_MUNICIPIO = m.ID_MUNICIPIO      " +
        "              AND   s.ID_COMUNA =   c.ID_COMUNA      " +
        "              AND   s.POSSUI_SISTEMA_AGUA = 1      " +
        "              AND   s.NM_TP_TRATAMENTO_AGUA = 'Não realiza'      " +
        ") NrSistemasNãoRealiza      " +
        "FROM sisas.sistema_agua s      " +
        "     INNER JOIN sisas.provincia p ON  s.ID_PROVINCIA = p.ID_PROVINCIA      " +
        "     INNER JOIN sisas.municipio m ON s.ID_MUNICIPIO = m.ID_MUNICIPIO      " +
        "     INNER JOIN sisas.comuna c ON s.ID_COMUNA = c.ID_COMUNA      " +
        " WHERE s.ID_PROVINCIA = :provinciaId"+
        " GROUP BY       " +
        "       p.NM_PROVINCIA, p.ID_PROVINCIA,  m.NM_MUNICIPIO,      " +
        "        m.ID_MUNICIPIO,  c.NM_COMUNA, c.ID_COMUNA ", nativeQuery = true)
    List<Object[]> buscaDadosTratamentoSistemasAguaComunal(@Param("provinciaId") Long provinciaId);

    //FUNCIONAMNETO SISTEMAS DE AGUA
    @Query(value = "SELECT  p.NM_PROVINCIA,        " +
        "          (  SELECT COALESCE(SUM(s.QTD_HABITANTES_ACESSO_SERVICO_AGUA),2)  " +
        "                      FROM  sisas.sistema_agua s         " +
        "                      WHERE s.ID_PROVINCIA = p.ID_PROVINCIA        " +
        "                      AND   s.POSSUI_SISTEMA_AGUA = 1        " +
        "          ) NrPopulcaoBeneficiada,         " +
        "          ( SELECT  COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)        " +
        "                     FROM   sisas.sistema_agua s         " +
        "                     WHERE  s.ID_PROVINCIA = p.ID_PROVINCIA        " +
        "                     AND    s.POSSUI_SISTEMA_AGUA = 1               " +
        "          ) NrSistemas,        " +
        "          ( SELECT  COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)        " +
        "                     FROM   sisas.sistema_agua s         " +
        "                     WHERE  s.ID_PROVINCIA = p.ID_PROVINCIA        " +
        "                     AND    s.POSSUI_SISTEMA_AGUA = 1        " +
        "                     AND    s.estado_funcionamento_sistema = 'Está em funcionamento (Bom)'           " +
        "          ) NrSistemasFuncionam,         " +
        "      ( SELECT COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)        " +
        "                     FROM  sisas.sistema_agua s         " +
        "                     WHERE s.ID_PROVINCIA = p.ID_PROVINCIA        " +
        "                     AND   s.POSSUI_SISTEMA_AGUA = 1        " +
        "                     AND   s.estado_funcionamento_sistema =  'Não está em funcionamento'        " +
        "          )  NrSistemasNaoFuncionam,           " +
        "      ROUND((( ((SELECT  COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)        " +
        "                     FROM  sisas.sistema_agua s         " +
        "                     WHERE s.ID_PROVINCIA = p.ID_PROVINCIA        " +
        "                     AND   s.POSSUI_SISTEMA_AGUA = 1        " +
        "                     AND   s.estado_funcionamento_sistema = 'Está em funcionamento (Bom)'          " +
        "          ))  *100)/ (SELECT COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)        " +
        "                     FROM  sisas.sistema_agua s         " +
        "                     WHERE s.ID_PROVINCIA = p.ID_PROVINCIA        " +
        "                     AND   s.POSSUI_SISTEMA_AGUA = 1        " +
        "          )),2) PercentagemQueFuncionam,        " +
        "      ROUND((( (( SELECT  COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)        " +
        "                     FROM  sisas.sistema_agua s         " +
        "                     WHERE s.ID_PROVINCIA = p.ID_PROVINCIA        " +
        "                     AND   s.POSSUI_SISTEMA_AGUA = 1        " +
        "                     AND   s.estado_funcionamento_sistema = 'Não está em funcionamento'            " +
        "          ))  *100)/ (SELECT COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)        " +
        "                     FROM  sisas.sistema_agua s         " +
        "                     WHERE s.ID_PROVINCIA = p.ID_PROVINCIA        " +
        "                     AND   s.POSSUI_SISTEMA_AGUA = 1        " +
        "          )),2) PercentagemQueNaoFuncionam              " +
        " FROM sisas.sistema_agua s        " +
        "     INNER JOIN sisas.provincia p ON s.ID_PROVINCIA = p.ID_PROVINCIA        " +
        "     WHERE  s.POSSUI_SISTEMA_AGUA = 1        " +
        " GROUP BY         " +
        "       p.NM_PROVINCIA, p.ID_PROVINCIA", nativeQuery = true)
    List<Object[]> buscaDadosFuncionamentoSistemasAguaProvincial();

    @Query(value = "SELECT           p.NM_PROVINCIA,         " +
        "      m.NM_MUNICIPIO,         " +
        "          (  SELECT          COALESCE(SUM(s.QTD_HABITANTES_ACESSO_SERVICO_AGUA),2)         " +
        "                               FROM          sisas.sistema_agua s          " +
        "                               WHERE          s.ID_PROVINCIA = p.ID_PROVINCIA         " +
        "             AND          s.ID_MUNICIPIO = m.ID_MUNICIPIO         " +
        "                                AND          s.POSSUI_SISTEMA_AGUA = 1         " +
        "             ) NrPopulcaoBeneficiada,          " +
        "          ( SELECT          COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)         " +
        "                              FROM          sisas.sistema_agua s          " +
        "                              WHERE          s.ID_PROVINCIA = p.ID_PROVINCIA         " +
        "            AND          s.ID_MUNICIPIO = m.ID_MUNICIPIO         " +
        "                              AND          s.POSSUI_SISTEMA_AGUA = 1         " +
        "             ) NrSistemas,          " +
        "      (           SELECT          COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)         " +
        "                              FROM          sisas.sistema_agua s          " +
        "                              WHERE          s.ID_PROVINCIA = p.ID_PROVINCIA         " +
        "            AND          s.ID_MUNICIPIO = m.ID_MUNICIPIO         " +
        "                              AND          s.POSSUI_SISTEMA_AGUA = 1         " +
        "            AND          s.estado_funcionamento_sistema = 'Está em funcionamento (Bom)'                   " +
        "             ) NrSistemasFuncionam,          " +
        "      ( SELECT          COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)         " +
        "                              FROM          sisas.sistema_agua s          " +
        "                              WHERE          s.ID_PROVINCIA = p.ID_PROVINCIA         " +
        "            AND          s.ID_MUNICIPIO = m.ID_MUNICIPIO         " +
        "                              AND          s.POSSUI_SISTEMA_AGUA = 1         " +
        "            AND          s.estado_funcionamento_sistema =  'Não está em funcionamento'           " +
        "             )  NrSistemasNaoFuncionam,         " +
        "      ROUND((( ((SELECT          COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)         " +
        "                              FROM          sisas.sistema_agua s          " +
        "                              WHERE          s.ID_PROVINCIA = p.ID_PROVINCIA         " +
        "            AND          s.ID_MUNICIPIO = m.ID_MUNICIPIO         " +
        "                           AND          s.POSSUI_SISTEMA_AGUA = 1         " +
        "            AND          s.estado_funcionamento_sistema = 'Está em funcionamento (Bom)'         " +
        "             ))  *100)/ (SELECT          COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)         " +
        "                              FROM          sisas.sistema_agua s          " +
        "                              WHERE          s.ID_PROVINCIA = p.ID_PROVINCIA         " +
        "            AND          s.ID_MUNICIPIO = m.ID_MUNICIPIO         " +
        "                                AND          s.POSSUI_SISTEMA_AGUA = 1                 " +
        "             )),2) PercentagemQueFuncionam,         " +
        "      ROUND((( ((SELECT          COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)         " +
        "                              FROM          sisas.sistema_agua s          " +
        "                              WHERE          s.ID_PROVINCIA = p.ID_PROVINCIA         " +
        "            AND          s.ID_MUNICIPIO = m.ID_MUNICIPIO         " +
        "                              AND          s.POSSUI_SISTEMA_AGUA = 1         " +
        "            AND          s.estado_funcionamento_sistema = 'Não está em funcionamento'                       " +
        "             ))  *100)/ (SELECT          COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)         " +
        "                              FROM          sisas.sistema_agua s          " +
        "                              WHERE          s.ID_PROVINCIA = p.ID_PROVINCIA         " +
        "            AND          s.ID_MUNICIPIO = m.ID_MUNICIPIO         " +
        "                              AND          s.POSSUI_SISTEMA_AGUA = 1         " +
        "             )),2) PercentagemQueNaoFuncionam               " +
        " FROM sisas.sistema_agua s          " +
        "     INNER JOIN sisas.provincia p on s.ID_PROVINCIA = p.ID_PROVINCIA         " +
        "     INNER JOIN sisas.municipio m on s.ID_MUNICIPIO = m.ID_MUNICIPIO         " +
        "     WHERE s.POSSUI_SISTEMA_AGUA = 1 AND s.ID_PROVINCIA = :provinciaId        " +
        " GROUP BY          " +
        "       p.NM_PROVINCIA, p.ID_PROVINCIA,          " +
        "       m.NM_MUNICIPIO, m.ID_MUNICIPIO", nativeQuery = true)
    List<Object[]> buscaDadosFuncionamentoSistemasAguaMunicipal(@Param("provinciaId") Long provinciaId);


    @Query(value = "SELECT p.NM_PROVINCIA,  " +
        "       m.NM_MUNICIPIO,  " +
        "       c.NM_COMUNA,  " +
        "          ( SELECT COALESCE(SUM(s.QTD_HABITANTES_ACESSO_SERVICO_AGUA),2)  " +
        "   FROM sisas.sistema_agua s   " +
        "   WHERE s.ID_PROVINCIA = p.ID_PROVINCIA  " +
        "            AND s.ID_MUNICIPIO = m.ID_MUNICIPIO  " +
        "            AND  c.ID_COMUNA = c.ID_COMUNA   " +
        "   AND s.POSSUI_SISTEMA_AGUA = 1  " +
        "    ) NrPopulcaoBeneficiada,   " +
        "          (  SELECT COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)  " +
        "    FROM sisas.sistema_agua s   " +
        "    WHERE s.ID_PROVINCIA = p.ID_PROVINCIA  " +
        "             AND s.ID_MUNICIPIO = m.ID_MUNICIPIO  " +
        "             AND  c.ID_COMUNA = c.ID_COMUNA  " +
        "    AND s.POSSUI_SISTEMA_AGUA = 1      " +
        "    ) NrSistemas,   " +
        "      (  SELECT COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)  " +
        "   FROM sisas.sistema_agua s   " +
        "   WHERE s.ID_PROVINCIA = p.ID_PROVINCIA  " +
        "            AND s.ID_MUNICIPIO = m.ID_MUNICIPIO  " +
        "            AND  c.ID_COMUNA = c.ID_COMUNA  " +
        "   AND s.POSSUI_SISTEMA_AGUA = 1  " +
        "            AND s.estado_funcionamento_sistema = 'Está em funcionamento (Bom)'    " +
        "    ) NrSistemasFuncionam,   " +
        "      ( SELECT COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)  " +
        "   FROM sisas.sistema_agua s   " +
        "   WHERE s.ID_PROVINCIA = p.ID_PROVINCIA  " +
        "            AND s.ID_MUNICIPIO = m.ID_MUNICIPIO  " +
        "            AND  c.ID_COMUNA = c.ID_COMUNA  " +
        "      AND s.POSSUI_SISTEMA_AGUA = 1  " +
        "            AND s.estado_funcionamento_sistema =  'Não está em funcionamento'  " +
        "    )  NrSistemasNaoFuncionam,  " +
        "      ROUND((( ((SELECT COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)  " +
        "   FROM sisas.sistema_agua s   " +
        "   WHERE s.ID_PROVINCIA = p.ID_PROVINCIA  " +
        "            AND s.ID_MUNICIPIO = m.ID_MUNICIPIO  " +
        "            AND  c.ID_COMUNA = c.ID_COMUNA  " +
        "     AND s.POSSUI_SISTEMA_AGUA = 1  " +
        "             AND s.estado_funcionamento_sistema = 'Está em funcionamento (Bom)'           " +
        "    ))  *100)/ (SELECT COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)  " +
        "   FROM sisas.sistema_agua s   " +
        "   WHERE s.ID_PROVINCIA = p.ID_PROVINCIA  " +
        "            AND s.ID_MUNICIPIO = m.ID_MUNICIPIO  " +
        "            AND  c.ID_COMUNA = c.ID_COMUNA  " +
        "   AND s.POSSUI_SISTEMA_AGUA = 1  " +
        "    )),2) PercentagemQueFuncionam,      " +
        "      ROUND((( ((SELECT COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)  " +
        "   FROM sisas.sistema_agua s   " +
        "   WHERE s.ID_PROVINCIA = p.ID_PROVINCIA  " +
        "            AND s.ID_MUNICIPIO = m.ID_MUNICIPIO  " +
        "            AND  c.ID_COMUNA = c.ID_COMUNA  " +
        "     AND s.POSSUI_SISTEMA_AGUA = 1  " +
        "             AND s.estado_funcionamento_sistema = 'Não está em funcionamento'                 " +
        "    ))  *100)/ (SELECT COALESCE(COUNT(POSSUI_SISTEMA_AGUA),2)  " +
        "   FROM sisas.sistema_agua s   " +
        "   WHERE s.ID_PROVINCIA = p.ID_PROVINCIA  " +
        "            AND s.ID_MUNICIPIO = m.ID_MUNICIPIO  " +
        "            AND  c.ID_COMUNA = c.ID_COMUNA  " +
        "     AND s.POSSUI_SISTEMA_AGUA = 1        " +
        "    )),2) PercentagemQueNaoFuncionam            " +
        " from sisas.sistema_agua s  " +
        "     inner join sisas.provincia p on s.ID_PROVINCIA = p.ID_PROVINCIA  " +
        "     inner join sisas.municipio m on s.ID_MUNICIPIO = m.ID_MUNICIPIO  " +
        "     inner join sisas.comuna c on s.ID_COMUNA = c.ID_COMUNA  " +
        "     where  s.POSSUI_SISTEMA_AGUA = 1 AND s.ID_PROVINCIA = :provinciaId  " +
        " GROUP BY   " +
        "       p.NM_PROVINCIA, p.id_provincia,   " +
        "       m.NM_MUNICIPIO, m.id_municipio,   " +
        "       c.NM_COMUNA, c.id_comuna", nativeQuery = true)
    List<Object[]> buscaDadosFuncionamentoSistemasAguaComunal(@Param("provinciaId") Long provinciaId);
}