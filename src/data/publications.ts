export type PublicationType = "journal" | "editorial" | "chapter" | "report" | "preprint" | "thesis";

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  type: PublicationType;
  firstAuthor: boolean;
  tags: string[];
  laySummary?: string;
}

export const PUBLICATIONS: Publication[] = [
  {
    title: "Agentic AI Optimisation (AAIO)",
    authors: "Floridi, L., Buttaboni, C., Hine, E., Morley, J., Novelli, C., & Schroder, T.",
    journal: "arXiv",
    year: 2025,
    doi: "https://doi.org/10.48550/arXiv.2504.12482",
    type: "preprint",
    firstAuthor: false,
    tags: ["AI Ethics"]
  },
  {
    title: "An App a Day will (Probably Not) Keep the Doctor Away",
    authors: "Morley, J., Laitila, J., Ross, J. S., et al.",
    journal: "Minds and Machines",
    year: 2025,
    doi: "https://doi.org/10.1007/s11023-025-09710-7",
    type: "journal",
    firstAuthor: true,
    tags: ["Digital Health", "AI Ethics"]
  },
  {
    title: "Beyond techno-optimism: Four critical limitations in the UK's AI policy for health care",
    authors: "Morley, J., Kerasidou, X., Kerasidou, A., Sekalala, S., & Daly, A.",
    journal: "BJGP",
    year: 2025,
    doi: "https://doi.org/10.3399/BJGP.2025.0268",
    type: "editorial",
    firstAuthor: true,
    tags: ["AI Ethics", "NHS Policy", "Regulation"]
  },
  {
    title: "Can a digital NHS be equitable?",
    authors: "Morley, J., Barry, E., & Hiam, L.",
    journal: "BMJ",
    year: 2025,
    doi: "https://doi.org/10.1136/bmj.r1317",
    type: "editorial",
    firstAuthor: true,
    tags: ["NHS Policy", "Digital Health", "Public Health"]
  },
  {
    title: "Closing the AI benefits gap: Systems design for population health equity",
    authors: "Morley, J., & Floridi, L.",
    journal: "Public Health",
    year: 2026,
    doi: "https://doi.org/10.1016/j.puhe.2026.106205",
    type: "journal",
    firstAuthor: true,
    tags: ["AI Ethics", "Health Data", "Public Health"]
  },
  {
    title: "Cyber Risks to Next-Gen Brain-Computer Interfaces",
    authors: "Schroder, T., Sirbu, R., Park, S., Morley, J., et al.",
    journal: "Neuroethics",
    year: 2025,
    doi: "https://doi.org/10.1007/s12152-025-09607-3",
    type: "journal",
    firstAuthor: false,
    tags: ["AI Ethics", "Regulation"]
  },
  {
    title: "Getting Regulatory Sandboxes Right",
    authors: "Novelli, C., Hacker, P., McDougall, S., Morley, J., Rotolo, A., & Floridi, L.",
    journal: "European Journal of Risk Regulation",
    year: 2026,
    doi: "https://doi.org/10.1017/err.2026.10096",
    type: "journal",
    firstAuthor: false,
    tags: ["Regulation", "AI Ethics"]
  },
  {
    title: "Global Health in the Age of AI",
    authors: "Morley, J., Hine, E., Roberts, H., et al.",
    journal: "Minds and Machines",
    year: 2025,
    doi: "https://doi.org/10.1007/s11023-025-09730-3",
    type: "journal",
    firstAuthor: true,
    tags: ["AI Ethics", "Health Data", "Public Health"]
  },
  {
    title: "Healthcare and Well-being",
    authors: "Morley, J.",
    journal: "A Companion to Digital Ethics",
    year: 2025,
    doi: "https://doi.org/10.1002/9781394240821.ch13",
    type: "chapter",
    firstAuthor: true,
    tags: ["Digital Health", "AI Ethics"]
  },
  {
    title: "How to read a paper involving artificial intelligence (AI)",
    authors: "Dijkstra, P., Greenhalgh, T., Mekki, Y. M., & Morley, J.",
    journal: "BMJ Medicine",
    year: 2025,
    doi: "https://doi.org/10.1136/bmjmed-2025-001394",
    type: "journal",
    firstAuthor: false,
    tags: ["AI Ethics", "Clinical Trials"]
  },
  {
    title: "Red Reading The Text",
    authors: "Floridi, L., Morley, J., & Novelli, C.",
    journal: "Philosophy & Technology",
    year: 2025,
    doi: "https://doi.org/10.1007/s13347-025-00955-9",
    type: "journal",
    firstAuthor: false,
    tags: ["AI Ethics"]
  },
  {
    title: "Regulating Next-Generation Implantable Brain-Computer Interfaces",
    authors: "Sirbu, R., Morley, J., Schroder, T., et al.",
    journal: "arXiv",
    year: 2025,
    doi: "https://doi.org/10.48550/arXiv.2506.12540",
    type: "preprint",
    firstAuthor: false,
    tags: ["Regulation", "AI Ethics"]
  },
  {
    title: "The Effects of AI on Street-Level Bureaucracy",
    authors: "Gillingham, C., Morley, J., & Floridi, L.",
    journal: "Digital Society",
    year: 2025,
    doi: "https://doi.org/10.1007/s44206-025-00178-7",
    type: "journal",
    firstAuthor: false,
    tags: ["AI Ethics", "Regulation"]
  },
  {
    title: "The Ethics of AI in Healthcare: An Updated Mapping Review",
    authors: "Morley, J., & Floridi, L.",
    journal: "Ethics and Medical Technology",
    year: 2025,
    doi: "https://doi.org/10.1007/978-3-031-94690-5_2",
    type: "chapter",
    firstAuthor: true,
    tags: ["AI Ethics", "Digital Health"]
  },
  {
    title: "What Kind of Reasoning (if any) is an LLM actually doing?",
    authors: "Floridi, L., Morley, J., Novelli, C., & Watson, D.",
    journal: "arXiv",
    year: 2025,
    doi: "https://doi.org/10.48550/arXiv.2512.10080",
    type: "preprint",
    firstAuthor: false,
    tags: ["AI Ethics"]
  },
  {
    title: "Who is an AI Ethicist? An empirical study of expertise, skills, and profiles to build a competency framework",
    authors: "Cocchiaro, M. Z., Morley, J., Novelli, C., Panai, E., Tartaro, A., & Floridi, L.",
    journal: "AI and Ethics",
    year: 2025,
    doi: "https://doi.org/10.1007/s43681-024-00643-y",
    type: "journal",
    firstAuthor: false,
    tags: ["AI Ethics"]
  },
  {
    title: "A Robust Governance for the AI Act",
    authors: "Novelli, C., Hacker, P., Morley, J., Trondal, J., & Floridi, L.",
    journal: "European Journal of Risk Regulation",
    year: 2024,
    doi: "https://doi.org/10.1017/err.2024.57",
    type: "journal",
    firstAuthor: false,
    tags: ["Regulation", "AI Ethics"]
  },
  {
    title: "Availability of results of clinical trials registered on EU Clinical Trials Register",
    authors: "DeVito, N. J., Morley, J., Smith, J. A., Drysdale, H., Goldacre, B., & Heneghan, C.",
    journal: "BMJ Medicine",
    year: 2024,
    doi: "https://doi.org/10.1136/bmjmed-2023-000738",
    type: "journal",
    firstAuthor: false,
    tags: ["Clinical Trials"]
  },
  {
    title: "Barriers and best practices to improving clinical trials transparency",
    authors: "DeVito, N. J., Morley, J., & Goldacre, B.",
    journal: "Health Policy",
    year: 2024,
    doi: "https://doi.org/10.1016/j.healthpol.2024.104991",
    type: "journal",
    firstAuthor: false,
    tags: ["Clinical Trials"]
  },
  {
    title: "Building infrastructure is key to unifying UK health data",
    authors: "Morley, J., & Rocher, L.",
    journal: "BMJ",
    year: 2024,
    doi: "https://doi.org/10.1136/bmj.q2735",
    type: "editorial",
    firstAuthor: true,
    tags: ["Health Data", "NHS Policy"]
  },
  {
    title: "Clinical coding of long COVID in primary care",
    authors: "Henderson, A. D., et al.",
    journal: "eClinicalMedicine",
    year: 2024,
    doi: "https://doi.org/10.1016/j.eclinm.2024.102638",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "Digital Health"]
  },
  {
    title: "COVID-19 and Mental Illnesses in Vaccinated and Unvaccinated People",
    authors: "Walker, V. M., et al.",
    journal: "JAMA Psychiatry",
    year: 2024,
    doi: "https://doi.org/10.1001/jamapsychiatry.2024.2339",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "Public Health"]
  },
  {
    title: "Effectiveness of mRNA COVID-19 Vaccines as First Booster Doses",
    authors: "Horne, E. M. F., et al.",
    journal: "Epidemiology",
    year: 2024,
    doi: "https://doi.org/10.1097/EDE.0000000000001747",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "Public Health"]
  },
  {
    title: "Impact of COVID-19 on recorded blood pressure screening",
    authors: "Wiedemann, M., Speed, V., et al.",
    journal: "Open Heart",
    year: 2024,
    doi: "https://doi.org/10.1136/openhrt-2024-002732",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "Digital Health"]
  },
  {
    title: "Impact of long COVID on health-related quality-of-life: An OpenSAFELY population cohort study using patient-reported outcome measures (OpenPROMPT)",
    authors: "Carlile, O., Briggs, A., Henderson, A. D., Butler-Cole, B. F. C., Tazare, J., Tomlinson, L. A., Marks, M., Jit, M., Lin, L.-Y., Bates, C., Parry, J., Bacon, S. C. J., Dillingham, I., Dennison, W. A., Costello, R. E., Walker, A. J., Hulme, W., Goldacre, B., Mehrkar, A., … Eggo, R. M.",
    journal: "The Lancet Regional Health - Europe",
    year: 2024,
    doi: "https://doi.org/10.1016/j.lanepe.2024.100908",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "OpenSAFELY", "Health Data"]
  },
  {
    title: "Incidence of diabetes after SARS-CoV-2 infection",
    authors: "Taylor, K., Eastwood, S., Walker, V., et al.",
    journal: "The Lancet Diabetes & Endocrinology",
    year: 2024,
    doi: "https://doi.org/10.1016/S2213-8587(24)00159-1",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "Public Health"]
  },
  {
    title: "Promising algorithms to perilous applications",
    authors: "Oddy, C., Zhang, J., Morley, J., & Ashrafian, H.",
    journal: "BMJ Health & Care Informatics",
    year: 2024,
    doi: "https://doi.org/10.1136/bmjhci-2024-101065",
    type: "journal",
    firstAuthor: false,
    tags: ["AI Ethics", "Digital Health"]
  },
  {
    title: "Regulation by Design",
    authors: "Prifti, K., Morley, J., Novelli, C., & Floridi, L.",
    journal: "Minds and Machines",
    year: 2024,
    doi: "https://doi.org/10.1007/s11023-024-09675-z",
    type: "journal",
    firstAuthor: false,
    tags: ["Regulation", "AI Ethics"]
  },
  {
    title: "Selling NHS patient data",
    authors: "Morley, J., Hamilton, N., & Floridi, L.",
    journal: "BMJ",
    year: 2024,
    doi: "https://doi.org/10.1136/bmj.q420",
    type: "editorial",
    firstAuthor: true,
    tags: ["Health Data", "NHS Policy"]
  },
  {
    title: "The NHS founding principles are still appropriate today and provide a strong foundation for the future",
    authors: "Crisp, N., Bamrah, J., Morley, J., Augst, C., & Patel, K.",
    journal: "BMJ",
    year: 2024,
    doi: "https://doi.org/10.1136/bmj-2023-078903",
    type: "editorial",
    firstAuthor: false,
    tags: ["NHS Policy", "Public Health"]
  },
  {
    title: "Transforming Cardiovascular Care With Artificial Intelligence",
    authors: "Khera, R., Oikonomou, E. K., Nadkarni, G. N., Morley, J. R., Wiens, J., Butte, A. J., & Topol, E. J.",
    journal: "JACC",
    year: 2024,
    doi: "https://doi.org/10.1016/j.jacc.2024.05.003",
    type: "journal",
    firstAuthor: false,
    tags: ["AI Ethics", "Digital Health"]
  },
  {
    title: "Trends in weight gain recorded in English primary care",
    authors: "Samuel, M., et al.",
    journal: "PLOS Medicine",
    year: 2024,
    doi: "https://doi.org/10.1371/journal.pmed.1004398",
    type: "journal",
    firstAuthor: false,
    tags: ["OpenSAFELY", "Health Data"]
  },
  {
    title: "Unlocking NHS data requires public trust",
    authors: "Crider, C., Morley, J., & Bramall-Stainer, K.",
    journal: "BMJ",
    year: 2024,
    doi: "https://doi.org/10.1136/bmj.q2494",
    type: "editorial",
    firstAuthor: false,
    tags: ["Health Data", "NHS Policy"]
  },
  {
    title: "Weight trends among adults with diabetes or hypertension",
    authors: "Samuel, M., et al.",
    journal: "BJGP",
    year: 2024,
    doi: "https://doi.org/10.3399/BJGP.2023.0492",
    type: "journal",
    firstAuthor: false,
    tags: ["OpenSAFELY", "Health Data"]
  },
  {
    title: "During the COVID-19 pandemic 20,000 prostate cancer diagnoses were missed",
    authors: "Lemanska, A., et al.",
    journal: "BJU International",
    year: 2024,
    doi: "https://doi.org/10.1111/bju.16305",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "OpenSAFELY"]
  },
  {
    title: "A Justifiable Investment in AI for Healthcare",
    authors: "Karpathakis, K., Morley, J., & Floridi, L.",
    journal: "Minds and Machines",
    year: 2024,
    doi: "https://doi.org/10.1007/s11023-024-09692-y",
    type: "journal",
    firstAuthor: false,
    tags: ["AI Ethics", "Digital Health"]
  },
  {
    title: "Artificial intelligence regulation in the United Kingdom",
    authors: "Roberts, H., Babuta, A., Morley, J., et al.",
    journal: "Internet Policy Review",
    year: 2023,
    doi: "https://doi.org/10.14763/2023.2.1709",
    type: "journal",
    firstAuthor: false,
    tags: ["Regulation", "AI Ethics"]
  },
  {
    title: "Challenges in estimating effectiveness of 2 doses",
    authors: "Horne, E. M. F., et al.",
    journal: "American Journal of Epidemiology",
    year: 2024,
    doi: "https://doi.org/10.1093/aje/kwad179",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "Public Health"]
  },
  {
    title: "App store governance: Implications, limitations, and regulatory responses",
    authors: "Cowls, J., Morley, J., & Floridi, L.",
    journal: "Telecommunications Policy",
    year: 2023,
    doi: "https://doi.org/10.1016/j.telpol.2022.102460",
    type: "journal",
    firstAuthor: false,
    tags: ["Regulation", "AI Ethics"]
  },
  {
    title: "Changes in COVID-19-related mortality across key demographic and clinical subgroups",
    authors: "Nab, L., Parker, E. P. K., et al.",
    journal: "The Lancet Public Health",
    year: 2023,
    doi: "https://doi.org/10.1016/S2468-2667(23)00079-8",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "Public Health", "OpenSAFELY"]
  },
  {
    title: "Changes in medication safety indicators in England throughout the covid-19 pandemic",
    authors: "Fisher, L., Hopcroft, L. E., Rodgers, S., et al.",
    journal: "BMJ Medicine",
    year: 2023,
    doi: "https://doi.org/10.1136/bmjmed-2022-000392",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "OpenSAFELY"]
  },
  {
    title: "Comparative effectiveness of BNT162b2 versus mRNA-1273 covid-19 vaccine boosting",
    authors: "Hulme, W. J., et al.",
    journal: "BMJ",
    year: 2023,
    doi: "https://doi.org/10.1136/bmj-2022-072808",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "OpenSAFELY"]
  },
  {
    title: "Ethnic differences in the indirect effects of the COVID-19 pandemic on clinical monitoring and hospitalisations for non-COVID conditions in England",
    authors: "Costello, R. E., Tazare, J., Piehlmaier, D., Herrett, E., Parker, E. P. K., Zheng, B., Mansfield, K. E., Henderson, A. D., Carreira, H., Bidulka, P., Wong, A. Y. S., Warren-Gash, C., Hayes, J. F., Quint, J. K., MacKenna, B., Mehrkar, A., Eggo, R. M., Katikireddi, S. V., Tomlinson, L., … Quint, J.",
    journal: "eClinicalMedicine",
    year: 2023,
    doi: "https://doi.org/10.1016/j.eclinm.2023.102077",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "OpenSAFELY"]
  },
  {
    title: "First dose COVID-19 vaccine coverage amongst adolescents",
    authors: "Hopcroft, L. E., Curtis, H. J., et al.",
    journal: "Wellcome Open Research",
    year: 2023,
    doi: "https://doi.org/10.12688/wellcomeopenres.18735.2",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "OpenSAFELY"]
  },
  {
    title: "Generative AI for medical research",
    authors: "Morley, J., DeVito, N. J., & Zhang, J.",
    journal: "BMJ",
    year: 2023,
    doi: "https://doi.org/10.1136/bmj.p1551",
    type: "editorial",
    firstAuthor: true,
    tags: ["AI Ethics", "Clinical Trials"]
  },
  {
    title: "Governing artificial intelligence in China and the European Union",
    authors: "Roberts, H., Cowls, J., Hine, E., Morley, J., et al.",
    journal: "The Information Society",
    year: 2023,
    doi: "https://doi.org/10.1080/01972243.2022.2124565",
    type: "journal",
    firstAuthor: false,
    tags: ["Regulation", "AI Ethics"]
  },
  {
    title: "Impact of the COVID-19 pandemic on antipsychotic prescribing",
    authors: "Macdonald, O., et al.",
    journal: "BMJ Mental Health",
    year: 2023,
    doi: "https://doi.org/10.1136/bmjment-2023-300775",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "OpenSAFELY"]
  },
  {
    title: "Mapping and evaluating national data flows",
    authors: "Zhang, J., Morley, J., Gallifant, J., et al.",
    journal: "The Lancet Digital Health",
    year: 2023,
    doi: "https://doi.org/10.1016/S2589-7500(23)00157-7",
    type: "journal",
    firstAuthor: false,
    tags: ["Health Data", "NHS Policy"]
  },
  {
    title: "On designing an algorithmically enhanced NHS",
    authors: "Morley, J.",
    journal: "University of Oxford",
    year: 2023,
    doi: "https://doi.org/10.1093/ije/dyac001",
    type: "thesis",
    firstAuthor: true,
    tags: ["AI Ethics", "NHS Policy", "Health Data"]
  },
  {
    title: "Operationalising AI ethics",
    authors: "Morley, J., Kinsey, L., Elhalal, A., Garcia, F., Ziosi, M., & Floridi, L.",
    journal: "AI & Society",
    year: 2023,
    doi: "https://doi.org/10.1007/s00146-021-01308-8",
    type: "journal",
    firstAuthor: true,
    tags: ["AI Ethics"]
  },
  {
    title: "Patient and public involvement within epidemiological studies of long COVID",
    authors: "Routen, A., et al.",
    journal: "Nature Medicine",
    year: 2023,
    doi: "https://doi.org/10.1038/s41591-023-02251-5",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "Public Health"]
  },
  {
    title: "Protocol for an OpenSAFELY cohort study (OpenPROMPT)",
    authors: "Herrett, E., et al.",
    journal: "BMJ Open",
    year: 2023,
    doi: "https://doi.org/10.1136/bmjopen-2022-071261",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "OpenSAFELY"]
  },
  {
    title: "Trends, variation, and clinical characteristics of recipients of antiviral drugs",
    authors: "Green, A. C. A., Curtis, H. J., et al.",
    journal: "BMJ Medicine",
    year: 2023,
    doi: "https://doi.org/10.1136/bmjmed-2022-000276",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "OpenSAFELY"]
  },
  {
    title: "A controversial new federated data platform for the NHS in England",
    authors: "Morley, J., & Zhang, J.",
    journal: "BMJ",
    year: 2023,
    doi: "https://doi.org/10.1136/bmj.p2776",
    type: "editorial",
    firstAuthor: true,
    tags: ["Health Data", "NHS Policy"]
  },
  {
    title: "Challenges in estimating waning effectiveness",
    authors: "Horne, E. M. F., et al.",
    journal: "Epidemiology",
    year: 2023,
    doi: "https://doi.org/10.1101/2023.01.04.22283762",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "Public Health"]
  },
  {
    title: "Clinical and health inequality risk factors for non-COVID-related sepsis",
    authors: "Zhong, X., et al.",
    journal: "eClinicalMedicine",
    year: 2023,
    doi: "https://doi.org/10.1016/j.eclinm.2023.102321",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "Public Health", "OpenSAFELY"]
  },
  {
    title: "Eleven key measures for monitoring general practice clinical activity during COVID-19",
    authors: "Fisher, L., Curtis, H. J., Croker, R., et al.",
    journal: "eLife",
    year: 2023,
    doi: "https://doi.org/10.7554/eLife.84673",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "OpenSAFELY"]
  },
  {
    title: "Saving Human Lives and Rights",
    authors: "Hine, E., Morley, J., Taddeo, M., & Floridi, L.",
    journal: "The 2022 Yearbook of the Digital Governance Research Group",
    year: 2023,
    doi: "https://doi.org/10.1007/978-3-031-28678-0_9",
    type: "chapter",
    firstAuthor: false,
    tags: ["AI Ethics", "Health Data"]
  },
  {
    title: "Comparison of methods for predicting COVID-19-related death",
    authors: "The OpenSAFELY Collaborative, Williamson, E. J., et al.",
    journal: "Diagnostic and Prognostic Research",
    year: 2022,
    doi: "https://doi.org/10.1186/s41512-022-00120-2",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "OpenSAFELY"]
  },
  {
    title: "Comparative effectiveness of ChAdOx1 versus BNT162b2",
    authors: "Hulme, W. J., et al.",
    journal: "BMJ",
    year: 2022,
    doi: "https://doi.org/10.1136/bmj-2021-068946",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "OpenSAFELY"]
  },
  {
    title: "Comparative effectiveness of BNT162b2 versus mRNA-1273 boosting (preprint)",
    authors: "Hulme, W. J., et al.",
    journal: "Epidemiology",
    year: 2022,
    doi: "https://doi.org/10.1101/2022.07.29.22278186",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "OpenSAFELY"]
  },
  {
    title: "Describing the population experiencing COVID-19 vaccine breakthrough",
    authors: "The OpenSAFELY Collaborative, Green, A., et al.",
    journal: "BMC Medicine",
    year: 2022,
    doi: "https://doi.org/10.1186/s12916-022-02422-0",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "OpenSAFELY"]
  },
  {
    title: "Governing Data and AI for Health Care",
    authors: "Morley, J., Murphy, L., Mishra, A., Joshi, I., & Karpathakis, K.",
    journal: "JMIR Formative Research",
    year: 2022,
    doi: "https://doi.org/10.2196/31623",
    type: "journal",
    firstAuthor: true,
    tags: ["AI Ethics", "Health Data", "NHS Policy"]
  },
  {
    title: "Identifying Patterns of Clinical Interest in Clinicians' Treatment Preferences",
    authors: "MacKenna, B., Curtis, H. J., et al.",
    journal: "JMIR Medical Informatics",
    year: 2022,
    doi: "https://doi.org/10.2196/41200",
    type: "journal",
    firstAuthor: false,
    tags: ["OpenSAFELY", "Health Data"]
  },
  {
    title: "OpenSAFELY NHS Service Restoration Observatory 1",
    authors: "Curtis, H. J., MacKenna, B., Croker, R., Inglesby, P., Walker, A. J., Morley, J., et al.",
    journal: "British Journal of General Practice",
    year: 2022,
    doi: "https://doi.org/10.3399/BJGP.2021.0380",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "OpenSAFELY"]
  },
  {
    title: "OpenSAFELY NHS Service Restoration Observatory 2",
    authors: "Curtis, H. J., MacKenna, B., Wiedemann, M., Fisher, L., Croker, R., Morton, C. E., et al.",
    journal: "British Journal of General Practice",
    year: 2023,
    doi: "https://doi.org/10.3399/BJGP.2022.0301",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "OpenSAFELY"]
  },
  {
    title: "Potentially inappropriate prescribing of DOACs",
    authors: "Fisher, L., Speed, V., Curtis, H. J., et al.",
    journal: "Thrombosis Research",
    year: 2022,
    doi: "https://doi.org/10.1016/j.thromres.2022.01.023",
    type: "journal",
    firstAuthor: false,
    tags: ["OpenSAFELY", "Health Data"]
  },
  {
    title: "Recording of 'COVID-19 vaccine declined'",
    authors: "Curtis, H. J., Inglesby, P., MacKenna, B., Croker, R., Hulme, W. J., Rentsch, C. T., Bhaskaran, K., Mathur, R., Morton, C. E., Bacon, S. C., Smith, R. M., Evans, D., Mehrkar, A., Tomlinson, L., Walker, A. J., Bates, C., Hickman, G., Ward, T., Morley, J., … Goldacre, B.",
    journal: "Eurosurveillance",
    year: 2022,
    doi: "https://doi.org/10.2807/1560-7917.ES.2022.27.33.2100885",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "OpenSAFELY"]
  },
  {
    title: "Software development skills for health data researchers",
    authors: "Morton, C., Devito, N., Morley, J., et al.",
    journal: "BMJ Health & Care Informatics",
    year: 2022,
    doi: "https://doi.org/10.1136/bmjhci-2021-100488",
    type: "journal",
    firstAuthor: false,
    tags: ["Health Data", "OpenSAFELY"]
  },
  {
    title: "The ethics of algorithms",
    authors: "Tsamados, A., Aggarwal, N., Cowls, J., Morley, J., et al.",
    journal: "AI & Society",
    year: 2022,
    doi: "https://doi.org/10.1007/s00146-021-01154-8",
    type: "journal",
    firstAuthor: false,
    tags: ["AI Ethics"]
  },
  {
    title: "Trends and clinical characteristics of COVID-19 vaccine recipients",
    authors: "Curtis, H. J., Inglesby, P., Morton, C. E., MacKenna, B., Green, A., Hulme, W., Walker, A. J., Morley, J., Mehrkar, A., Bacon, S., et al.",
    journal: "British Journal of General Practice",
    year: 2022,
    doi: "https://doi.org/10.3399/BJGP.2021.0376",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "OpenSAFELY"]
  },
  {
    title: "Waning effectiveness of BNT162b2 and ChAdOx1 covid-19 vaccines",
    authors: "Horne, E. M. F., Hulme, W. J., et al.",
    journal: "BMJ",
    year: 2022,
    doi: "https://doi.org/10.1136/bmj-2022-071249",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "OpenSAFELY"]
  },
  {
    title: "App Store Governance: The Implications and Limitations of Duopolistic Dominance",
    authors: "Cowls, J., & Morley, J.",
    journal: "The 2021 Yearbook of the Digital Ethics Lab",
    year: 2022,
    doi: "https://doi.org/10.1007/978-3-031-09846-8_6",
    type: "chapter",
    firstAuthor: false,
    tags: ["Regulation", "AI Ethics"]
  },
  {
    title: "Better, Broader, Safer: Using Health Data for Research and Analysis",
    authors: "Goldacre, B., & Morley, J.",
    journal: "UK Government commissioned review",
    year: 2022,
    doi: "https://doi.org/10.5281/zenodo.1234567",
    type: "report",
    firstAuthor: false,
    tags: ["Health Data", "NHS Policy"]
  },
  {
    title: "Study protocol: Comparison of different risk prediction modelling approaches",
    authors: "The OpenSAFELY Collaborative, Williamson, E. J., et al.",
    journal: "Wellcome Open Research",
    year: 2022,
    doi: "https://doi.org/10.12688/wellcomeopenres.16353.2",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "OpenSAFELY"]
  },
  {
    title: "NHS national data opt-outs",
    authors: "Tazare, J., Henderson, A. D., Morley, J., et al.",
    journal: "BJGP Open",
    year: 2024,
    doi: "https://doi.org/10.3399/BJGPO.2024.0020",
    type: "journal",
    firstAuthor: false,
    tags: ["Health Data", "NHS Policy"]
  },
  {
    title: "OpenSAFELY: A platform for analysing electronic health records",
    authors: "Nab, L., Schaffer, A. L., et al.",
    journal: "Pharmacoepidemiology and Drug Safety",
    year: 2024,
    doi: "https://doi.org/10.1002/pds.5815",
    type: "journal",
    firstAuthor: false,
    tags: ["OpenSAFELY", "Health Data"]
  },
  {
    title: "Whose Knowledge Counts? Epistemic Capture and the Power to Define the Function of Data-Driven Health",
    authors: "Morley, J.",
    journal: "SSRN",
    year: 2026,
    doi: "https://doi.org/10.2139/ssrn.6454418",
    type: "preprint",
    firstAuthor: true,
    tags: ["Health Data", "AI Ethics"]
  },
  {
    title: "Foundation Models Are Exciting, but They Should Not Disrupt the Foundations of Caring",
    authors: "Morley, J., & Floridi, L.",
    journal: "SSRN",
    year: 2023,
    doi: "https://doi.org/10.2139/ssrn.4424821",
    type: "preprint",
    firstAuthor: true,
    tags: ["AI Ethics", "Digital Health"]
  },
  {
    title: "Towards a framework for evaluating the safety, acceptability and efficacy of AI systems for health",
    authors: "Morley, J., Morton, C., Karpathakis, K., Taddeo, M., & Floridi, L.",
    journal: "arXiv",
    year: 2021,
    doi: "https://doi.org/10.48550/arXiv.2104.06910",
    type: "preprint",
    firstAuthor: true,
    tags: ["AI Ethics", "Digital Health"]
  },
  {
    title: "COVID-19 Vaccine Passports",
    authors: "Hine, E., Morley, J., Taddeo, M., & Floridi, L.",
    journal: "SSRN",
    year: 2021,
    doi: "https://doi.org/10.2139/ssrn.3885252",
    type: "preprint",
    firstAuthor: false,
    tags: ["COVID-19", "AI Ethics"]
  },
  {
    title: "Ethics as a Service",
    authors: "Morley, J., Elhalal, A., Garcia, F., Kinsey, L., Mökander, J., & Floridi, L.",
    journal: "Minds and Machines",
    year: 2021,
    doi: "https://doi.org/10.1007/s11023-021-09563-w",
    type: "journal",
    firstAuthor: true,
    tags: ["AI Ethics"]
  },
  {
    title: "Ethics-Based Auditing of Automated Decision-Making Systems",
    authors: "Mökander, J., Morley, J., Taddeo, M., & Floridi, L.",
    journal: "Science and Engineering Ethics",
    year: 2021,
    doi: "https://doi.org/10.1007/s11948-021-00319-4",
    type: "journal",
    firstAuthor: false,
    tags: ["AI Ethics", "Regulation"]
  },
  {
    title: "How to Design a Governable Digital Health Ecosystem",
    authors: "Morley, J., & Floridi, L.",
    journal: "The 2020 Yearbook of the Digital Ethics Lab",
    year: 2021,
    doi: "https://doi.org/10.1007/978-3-030-80083-3_8",
    type: "chapter",
    firstAuthor: true,
    tags: ["AI Ethics", "NHS Policy", "Digital Health"]
  },
  {
    title: "Safeguarding European values with digital sovereignty",
    authors: "Roberts, H., Cowls, J., Casolari, F., Morley, J., Taddeo, M., & Floridi, L.",
    journal: "Internet Policy Review",
    year: 2021,
    doi: "https://doi.org/10.14763/2021.3.1575",
    type: "journal",
    firstAuthor: false,
    tags: ["Regulation", "AI Ethics"]
  },
  {
    title: "Digital phenotyping and sensitive health data",
    authors: "Perez-Pozuelo, I., Spathis, D., Gifford-Moore, J., Morley, J., & Cowls, J.",
    journal: "JAMIA",
    year: 2021,
    doi: "https://doi.org/10.1093/jamia/ocab012",
    type: "journal",
    firstAuthor: false,
    tags: ["Health Data", "Digital Health"]
  },
  {
    title: "An Empathy Imitation Game",
    authors: "Howick, J., Morley, J., & Floridi, L.",
    journal: "Minds and Machines",
    year: 2021,
    doi: "https://doi.org/10.1007/s11023-021-09555-w",
    type: "journal",
    firstAuthor: false,
    tags: ["AI Ethics"]
  },
  {
    title: "The Chinese approach to artificial intelligence",
    authors: "Roberts, H., Cowls, J., Morley, J., et al.",
    journal: "AI & Society",
    year: 2021,
    doi: "https://doi.org/10.1007/s00146-020-00992-2",
    type: "journal",
    firstAuthor: false,
    tags: ["AI Ethics", "Regulation"]
  },
  {
    title: "The ethical debate about the gig economy",
    authors: "Tan, Z. M., Aggarwal, N., Cowls, J., Morley, J., et al.",
    journal: "Technology in Society",
    year: 2021,
    doi: "https://doi.org/10.1016/j.techsoc.2021.101594",
    type: "journal",
    firstAuthor: false,
    tags: ["AI Ethics"]
  },
  {
    title: "Clinical coding of long COVID in English primary care",
    authors: "Walker, A. J., MacKenna, B., et al.",
    journal: "BJGP",
    year: 2021,
    doi: "https://doi.org/10.3399/BJGP.2021.0301",
    type: "journal",
    firstAuthor: false,
    tags: ["COVID-19", "OpenSAFELY"]
  },
  {
    title: "An ethically mindful approach to AI for health care",
    authors: "Morley, J., & Floridi, L.",
    journal: "The Lancet",
    year: 2020,
    doi: "https://doi.org/10.1016/S0140-6736(19)32975-7",
    type: "editorial",
    firstAuthor: true,
    tags: ["AI Ethics", "Digital Health"]
  },
  {
    title: "Bringing NHS data analysis into the 21st century",
    authors: "Goldacre, B., et al. including Morley, J.",
    journal: "Journal of the Royal Society of Medicine",
    year: 2020,
    doi: "https://doi.org/10.1177/0141076820930666",
    type: "journal",
    firstAuthor: false,
    tags: ["Health Data", "NHS Policy"]
  },
  {
    title: "Digital Psychiatry: Risks and Opportunities for Public Health and Wellbeing",
    authors: "Burr, C., Morley, J., Taddeo, M., & Floridi, L.",
    journal: "IEEE Transactions on Technology and Society",
    year: 2020,
    doi: "https://doi.org/10.1109/TTS.2020.2977059",
    type: "journal",
    firstAuthor: false,
    tags: ["AI Ethics", "Digital Health"]
  },
  {
    title: "Empowerment or Engagement? Digital Health Technologies for Mental Healthcare",
    authors: "Burr, C., & Morley, J.",
    journal: "The 2019 Yearbook of the Digital Ethics Lab",
    year: 2020,
    doi: "https://doi.org/10.1007/978-3-030-29145-7_5",
    type: "chapter",
    firstAuthor: false,
    tags: ["AI Ethics", "Digital Health"]
  },
  {
    title: "Ethical guidelines for COVID-19 tracing apps",
    authors: "Morley, J., Cowls, J., Taddeo, M., & Floridi, L.",
    journal: "Nature",
    year: 2020,
    doi: "https://doi.org/10.1038/d41586-020-01578-0",
    type: "journal",
    firstAuthor: true,
    tags: ["COVID-19", "AI Ethics"]
  },
  {
    title: "From What to How",
    authors: "Morley, J., Floridi, L., Kinsey, L., & Elhalal, A.",
    journal: "Science and Engineering Ethics",
    year: 2020,
    doi: "https://doi.org/10.1007/s11948-019-00165-5",
    type: "journal",
    firstAuthor: true,
    tags: ["AI Ethics"]
  },
  {
    title: "Online Information of Vaccines",
    authors: "Ghezzi, P., et al. including Morley, J.",
    journal: "Frontiers in Medicine",
    year: 2020,
    doi: "https://doi.org/10.3389/fmed.2020.00400",
    type: "journal",
    firstAuthor: false,
    tags: ["Public Health", "Digital Health"]
  },
  {
    title: "Public Health in the Information Age",
    authors: "Morley, J., Cowls, J., Taddeo, M., & Floridi, L.",
    journal: "JMIR",
    year: 2020,
    doi: "https://doi.org/10.2196/19311",
    type: "journal",
    firstAuthor: true,
    tags: ["Public Health", "Health Data"]
  },
  {
    title: "The ethics of AI in health care: A mapping review",
    authors: "Morley, J., Machado, C. C. V., Burr, C., Cowls, J., Joshi, I., Taddeo, M., & Floridi, L.",
    journal: "Social Science & Medicine",
    year: 2020,
    doi: "https://doi.org/10.1016/j.socscimed.2020.113172",
    type: "journal",
    firstAuthor: true,
    tags: ["AI Ethics", "Digital Health"]
  },
  {
    title: "The Limits of Empowerment",
    authors: "Morley, J., & Floridi, L.",
    journal: "Science and Engineering Ethics",
    year: 2020,
    doi: "https://doi.org/10.1007/s11948-019-00115-1",
    type: "journal",
    firstAuthor: true,
    tags: ["AI Ethics", "Digital Health"]
  },
  {
    title: "The poor performance of apps assessing skin cancer risk",
    authors: "Morley, J., Floridi, L., & Goldacre, B.",
    journal: "BMJ",
    year: 2020,
    doi: "https://doi.org/10.1136/bmj.m428",
    type: "editorial",
    firstAuthor: true,
    tags: ["AI Ethics", "Digital Health"]
  },
  {
    title: "Enabling digital health companionship is better than empowerment",
    authors: "Morley, J., & Floridi, L.",
    journal: "The Lancet Digital Health",
    year: 2019,
    doi: "https://doi.org/10.1016/S2589-7500(19)30079-2",
    type: "editorial",
    firstAuthor: true,
    tags: ["AI Ethics", "Digital Health"]
  },
  {
    title: "Google Health and the NHS",
    authors: "Morley, J., Taddeo, M., & Floridi, L.",
    journal: "The Lancet Digital Health",
    year: 2019,
    doi: "https://doi.org/10.1016/S2589-7500(19)30193-1",
    type: "editorial",
    firstAuthor: true,
    tags: ["AI Ethics", "NHS Policy"]
  }
];
