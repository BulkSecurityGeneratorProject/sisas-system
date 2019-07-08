package com.minea.sisas.domain;

import java.math.BigDecimal;
import java.time.LocalDate;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(IndicadorProducao.class)
public abstract class IndicadorProducao_ {

	public static volatile SingularAttribute<IndicadorProducao, Long> qtdFuncionariosEfectivos;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdManuaisMmsPrevistos;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdReligacoes;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdReclamacoesRespondidasMaisCincoMenosVinteDias;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdAcoesFormacaoRealizadas;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> vlrRealFacturado;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdReparoAdutoras;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> qtdVolumeAguaFacturada;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> qtdComprimentoAdutoras;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdReclamacoes;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdNovasLigacoesNovosContratos;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdCortes;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> qtdConsumoEnergia;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> qtdVolumeFacturadoBaseLeituraReais;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdLigacoesDomesticasActivas;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdReservatorios;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdAcoesFormacaoMoRealizadas;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> qtdConsumoCombustivel;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdReclamacoesRespondidasMaiorIgualVinteDias;
	public static volatile SingularAttribute<IndicadorProducao, Long> id;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> qtdFontanariosChafarisesOperacionais;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdAcoesFormacaoMoPlaneadas;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdAcoesFormacaoMmsRealizadas;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdManutencaoCurativa;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdCaptacoes;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdAcoesManuaisMoRealizadas;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> qtdConsumoHipocloritroCalcio;
	public static volatile SingularAttribute<IndicadorProducao, SistemaAgua> idSistemaAgua;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdLigacoesFechadas;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdReparoCaptacaoEtas;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdLigacoesFacturadasBaseLeiturasReais;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> qtdMediaHorasDistribuicaoDiaria;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> vlrCustoReagentes;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> qtdComprimentoRamais;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdManutencaoPreventiva;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdFuncionariosOutrasEntidades;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdManuaisMmsRealizadas;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> vlrCustoPessoal;
	public static volatile SingularAttribute<IndicadorProducao, Comuna> idComuna;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdFuncionarios;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> vlrCustoOperacionaisOpex;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdReparoRedeDistribuicao;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> qtdVolumeAguaTratada;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdAcoesFormacaoCmpRealizadas;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> qtdMediaHorasParagem;
	public static volatile SingularAttribute<IndicadorProducao, Situacao> idSituacao;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> vlrFacturasCanceladasNotasCreditos;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdLigacoesActivas;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> qtdPopulacaoCobertaInfraestrutura;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdManuaisMoPrevistos;
	public static volatile SingularAttribute<IndicadorProducao, Long> idUsuario;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdReservatorioLavado;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdAcoesFormacaoSoftwareFornecidosRealizadas;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> vlrCustoDestinoFinalLamas;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> qtdVolumeTotalFacturadaLigacoesDomesticas;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdManuaisCmpPrevistos;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdManuaisRealizados;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> vlrTotalCobrado;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> vlrCustoEnergia;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> qtdVolumeAguaCaptada;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdReclamacoesRespondidasMenorIgualCincoDias;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> qtdMediaHorasInterrupcaoFaltaEnergia;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> qtdConsumoSulfatoAluminio;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> vlrTotalFacturado;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdEtas;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdAcoesFormacaoCmpPlaneadas;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> vlrCustoTotaisCapexOpex;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdFuncionariosContratados;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> qtdConsumoHidroxidoCalcio;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> vlrCustoFse;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdManuaisPrevistos;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdManutencaoVerificadoSolicitado;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdReparoRamais;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> vlrCustoAmortizaAnualInvestOpCapex;
	public static volatile SingularAttribute<IndicadorProducao, LocalDate> dtLancamento;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdAcoesFormacaoSoftwareFornecidosPlanejadas;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdManuaisCmpRealizadas;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> qtdComprimentoRedes;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> vlrCustoManutencao;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdAcoesFormacaoMmsPlaneadas;
	public static volatile SingularAttribute<IndicadorProducao, BigDecimal> qtdVolumeAguaDistribuida;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdNovasLigacoesDomesticasNovosContratos;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdLigacoesFacturadasBaseEstimativasAvenca;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdEstacoesElevatorias;
	public static volatile SingularAttribute<IndicadorProducao, LocalDate> dtUltimaAlteracao;
	public static volatile SingularAttribute<IndicadorProducao, Long> qtdLigacoesIlegaisRegularizadas;

}
