const categories = {
  mechanism: { label: '睡眠机制', class: 'cat-mechanism' },
  neuro: { label: '神经生物学', class: 'cat-neuro' },
  cognitive: { label: '认知功能', class: 'cat-cognitive' },
  disease: { label: '疾病健康', class: 'cat-disease' },
  physiology: { label: '生理系统', class: 'cat-physiology' },
  intervention: { label: '评估干预', class: 'cat-intervention' }
};

const literature = [
  { id: 1, name: '11920_2022_Article_1393.pdf', hint: 'Springer 2022' },
  { id: 2, name: '12916_2025_Article_4411.pdf', hint: 'Springer Nature 2025' },
  { id: 3, name: '41398_2022_Article_1878.pdf', hint: 'Nature Publishing 2022' },
  { id: 4, name: '41598_2024_Article_76117.pdf', hint: 'Scientific Reports 2024' },
  { id: 5, name: '41598_2025_Article_13405.pdf', hint: 'Scientific Reports 2025' },
  { id: 6, name: '42003_2021_Article_2825.pdf', hint: 'Communications Biology 2021' },
  { id: 7, name: 'cmab033.pdf', hint: 'Clinical Medicine 2022' },
  { id: 8, name: 'CN-20-272.pdf', hint: 'Chinese Medical Journal' },
  { id: 9, name: 'elife-69773.pdf', hint: 'eLife 2022' },
  { id: 10, name: 'elife-80206.pdf', hint: 'eLife 2023' },
  { id: 11, name: 'elife-97256.pdf', hint: 'eLife 2024' },
  { id: 12, name: 'EMS197318.pdf', hint: 'Elsevier Medical' },
  { id: 13, name: 'eneuro-11-ENEURO.0453-23.2024.pdf', hint: 'eNeuro 2024' },
  { id: 14, name: 'ETLS-7-487.pdf', hint: 'Emerging Topics in Life Sciences' },
  { id: 15, name: 'fpubh-12-1423771.pdf', hint: 'Frontiers in Public Health 2024' },
  { id: 16, name: 'gnad058.pdf', hint: 'Gerontology 2023' },
  { id: 17, name: 'ijerph-18-07867.pdf', hint: 'Int J Environ Res Public Health 2021' },
  { id: 18, name: 'ijerph-18-08245.pdf', hint: 'Int J Environ Res Public Health 2021' },
  { id: 19, name: 'ijerph-21-01155.pdf', hint: 'Int J Environ Res Public Health 2024' },
  { id: 20, name: 'IRNF_47_2471008.pdf', hint: 'Int Rev Neurobiology' },
  { id: 21, name: 'jcsm.10618.pdf', hint: 'J Clin Sleep Med 2023' },
  { id: 22, name: 'jcsm.9144.pdf', hint: 'J Clin Sleep Med 2022' },
  { id: 23, name: 'jcsm.9992.pdf', hint: 'J Clin Sleep Med 2023' },
  { id: 24, name: 'JEM_20220081.pdf', hint: 'JEM Sleep Medicine' },
  { id: 25, name: 'JSR-35-e70184.pdf', hint: 'J Sleep Research 2024' },
  { id: 26, name: 'lutz-et-al-2025-sleep-s-contribution-to-memory-formation.pdf', hint: 'Sleep & Memory 2025' },
  { id: 27, name: 'main (1).pdf', hint: 'Preprint/Manuscript' },
  { id: 28, name: 'main.pdf', hint: 'Preprint/Manuscript' },
  { id: 29, name: 'medi-105-e45225.pdf', hint: 'Medicine 2022' },
  { id: 30, name: 'nihms-1684635.pdf', hint: 'NIHMS Preprint' },
  { id: 31, name: 'nihms-1690903.pdf', hint: 'NIHMS Preprint' },
  { id: 32, name: 'nihms-1755089.pdf', hint: 'NIHMS Preprint' },
  { id: 33, name: 'nihms-1782922.pdf', hint: 'NIHMS Preprint' },
  { id: 34, name: 'nihms-1849803.pdf', hint: 'NIHMS Preprint' },
  { id: 35, name: 'nihms-1861157.pdf', hint: 'NIHMS Preprint' },
  { id: 36, name: 'nihms-1866175.pdf', hint: 'NIHMS Preprint' },
  { id: 37, name: 'nihms-1878536.pdf', hint: 'NIHMS Preprint' },
  { id: 38, name: 'nihms-1914602.pdf', hint: 'NIHMS Preprint' },
  { id: 39, name: 'nihms-1929985.pdf', hint: 'NIHMS Preprint' },
  { id: 40, name: 'nihms-1990234.pdf', hint: 'NIHMS Preprint' },
  { id: 41, name: 'nihms-2056139.pdf', hint: 'NIHMS Preprint' },
  { id: 42, name: 'nutrients-14-01549.pdf', hint: 'Nutrients 2022' },
  { id: 43, name: 'nutrients-17-01779.pdf', hint: 'Nutrients 2025' },
  { id: 44, name: 'pnas.202202394.pdf', hint: 'PNAS 2022' },
  { id: 45, name: 'pnas.202202657.pdf', hint: 'PNAS 2022' },
  { id: 46, name: 'pnas.202420846.pdf', hint: 'PNAS 2024' },
  { id: 47, name: 'pone.0282085.pdf', hint: 'PLOS ONE 2023' },
  { id: 48, name: 'S2045796022000452a.pdf', hint: 'Sleep Medicine 2022' },
  { id: 49, name: 'vhrm-21-571.pdf', hint: 'Vasc Health Risk Manag 2025' },
  { id: 50, name: 'zsae098.pdf', hint: 'Sleep Journal 2024' }
];

const keywords = [
  { id: 1, name: '睡眠剥夺', en: 'Sleep Deprivation', category: 'mechanism', desc: '指个体睡眠时间显著低于年龄推荐标准或自身生理需求的状态，可导致认知功能下降、免疫抑制及代谢紊乱。', detail: '睡眠剥夺是睡眠研究中最常用的实验范式之一。急性完全睡眠剥夺、慢性部分睡眠剥夺和选择性睡眠阶段剥夺（如REM剥夺）揭示睡眠对维持神经稳态、突触可塑性和代谢平衡至关重要。长期睡眠剥夺与多种疾病风险增加相关。', refs: [1, 9, 25] },
  { id: 2, name: '慢波睡眠', en: 'Slow-Wave Sleep', category: 'mechanism', desc: '非快速眼动睡眠的第三 stage，以高幅低频的delta波（0.5-4 Hz）为特征，是机体修复、免疫调节和记忆巩固的关键阶段。', detail: '慢波睡眠（SWS）是深度睡眠的主要形式，delta波功率随年龄增长而下降。SWS期间生长激素分泌达峰值，促进组织修复；同时海马-新皮层对话增强，支持陈述性记忆的长期存储。睡眠慢波的相位还可调节类淋巴系统的清除效率。', refs: [3, 10, 26] },
  { id: 3, name: 'REM睡眠', en: 'REM Sleep', category: 'mechanism', desc: '快速眼动睡眠以脑电去同步化、快速眼球运动和肌肉弛缓为特征，与梦境、情绪调节和程序性记忆巩固密切相关。', detail: 'REM睡眠由脑桥-外侧膝状体-枕叶（PGO）波启动，乙酰胆碱能系统活跃而单胺能系统受抑制。REM期大脑血流增加、体温调节减弱。REM睡眠剥夺可导致情绪识别能力下降，且与抑郁症的REM潜伏期缩短有关。', refs: [9, 20, 26] },
  { id: 4, name: '记忆巩固', en: 'Memory Consolidation', category: 'cognitive', desc: '指新获取的记忆痕迹从不稳定状态转化为相对稳定的长时程存储的过程，睡眠在其中发挥主动重播与整合作用。', detail: '记忆巩固包括突触巩固（synaptic consolidation）和系统巩固（systems consolidation）。睡眠期间海马 Sharp-Wave Ripples 与新皮层慢波、丘脑纺锤波形成三重耦合，促进记忆从海马依赖的临时存储向皮层分布式存储的转化。', refs: [26, 44, 45] },
  { id: 5, name: '突触可塑性', en: 'Synaptic Plasticity', category: 'neuro', desc: '神经元突触连接强度随活动模式发生适应性改变的能力，是学习与记忆的细胞基础，受睡眠-觉醒周期动态调控。', detail: '突触稳态假说（Synaptic Homeostasis Hypothesis, SHY）认为清醒时突触增强导致能量和空间有限，而睡眠通过慢波活动介导的突触下调（downscaling）恢复稳态，同时保留强连接的稳定性，从而优化记忆痕迹的信噪比。', refs: [6, 10, 13] },
  { id: 6, name: '失眠症', en: 'Insomnia', category: 'disease', desc: '以入睡困难、睡眠维持障碍或早醒为主要表现，并导致日间功能受损的最常见睡眠障碍，可分为急性和慢性。', detail: '慢性失眠障碍（CID）的诊断要求每周≥3晚出现症状且持续≥3个月。其病理机制涉及过度觉醒（hyperarousal）模型，包括皮层、认知、情绪及生理多个层面的觉醒增高。认知行为疗法（CBT-I）是一线治疗方案。', refs: [21, 22, 23] },
  { id: 7, name: '阻塞性睡眠呼吸暂停', en: 'Obstructive Sleep Apnea', category: 'disease', desc: '睡眠中反复发生上气道完全或部分塌陷，导致呼吸暂停/低通气、血氧下降和睡眠片段化，与心血管代谢疾病高度相关。', detail: 'OSA的病理生理包括解剖狭窄、上气道肌肉功能异常和呼吸调控不稳定。间歇性缺氧诱发氧化应激和全身炎症，是高血压、房颤、卒中和胰岛素抵抗的独立危险因素。持续气道正压通气（CPAP）为金标准治疗。', refs: [7, 22, 49] },
  { id: 8, name: '昼夜节律', en: 'Circadian Rhythm', category: 'mechanism', desc: '由内部生物钟驱动的约24小时周期性生理和行为波动，使生物体能够预测并适应环境的日夜更替。', detail: '哺乳动物的中央生物钟位于下丘脑视交叉上核（SCN），通过视网膜-下丘脑束接收光信号。生物钟分子机制涉及 CLOCK/BMAL1 转录激活和 PER/CRY 反馈抑制环路。昼夜节律失调可导致睡眠障碍、代谢异常和癌症风险增加。', refs: [14, 30, 44] },
  { id: 9, name: '褪黑素', en: 'Melatonin', category: 'neuro', desc: '由松果体主要在夜间分泌的激素，通过激活MT1/MT2受体向机体传递"黑暗信号"，是调节睡眠-觉醒时相的核心因子。', detail: '褪黑素分泌受SCN调控，呈现昼夜节律性，夜间浓度达峰值。外源性褪黑素可用于治疗时差反应、轮班工作睡眠障碍和延迟睡眠-觉醒相位障碍（DSWPD）。其抗氧化和免疫调节作用也受到广泛关注。', refs: [15, 42, 43] },
  { id: 10, name: '视交叉上核', en: 'Suprachiasmatic Nucleus', category: 'neuro', desc: '下丘脑前部的一对神经核团，哺乳动物生物钟的中央起搏器，协调全身外周时钟的同步化。', detail: 'SCN约包含20,000个神经元，单个细胞即可产生自主的昼夜节律振荡。SCN通过神经通路、激素（如血管加压素）以及体温、摄食行为的节律性调控外周器官。双侧SCN损毁导致完全性昼夜节律丧失。', refs: [14, 30, 33] },
  { id: 11, name: '下丘脑分泌素', en: 'Orexin / Hypocretin', category: 'neuro', desc: '下丘脑外侧区产生的神经肽，通过激活食欲素受体维持觉醒和稳定睡眠-觉醒状态，其缺失导致发作性睡病。', detail: '下丘脑分泌素（食欲素）神经元在觉醒期活跃，投射至整个觉醒促进系统。发作性睡病1型患者脑脊液中食欲素水平显著降低或缺失，与HLA-DQB1*06:02等遗传易感性及自身免疫机制有关。食欲素受体拮抗剂被开发为新型安眠药。', refs: [11, 37, 38] },
  { id: 12, name: '睡眠纺锤波', en: 'Sleep Spindles', category: 'mechanism', desc: 'NREM睡眠期出现的12-14 Hz短暂成簇脑电波，由丘脑-皮层环路产生，是睡眠稳定性和记忆巩固的重要电生理标志。', detail: '纺锤波分为慢速（11-13 Hz，额叶为主）和快速（13-15 Hz，中央顶叶为主）。纺锤波密度与流体智力、 overnight 记忆保持正相关，且可阻止外界刺激唤醒大脑（睡眠保护假说）。精神分裂症和衰老常伴纺锤波异常。', refs: [3, 25, 50] },
  { id: 13, name: 'K-复合波', en: 'K-Complex', category: 'mechanism', desc: 'NREM睡眠中出现的双相高幅慢波，是睡眠深度和稳定性的标志，兼具保护睡眠和参与记忆加工的双重功能。', detail: 'K-复合波由皮层表面负相波和紧随其后的正相波组成，可自发出现或由感觉刺激诱发。其被认为是纺锤波的"触发器"，也是睡眠对外界干扰的皮层反应。K-复合波密度随年龄增长而显著下降。', refs: [3, 25, 50] },
  { id: 14, name: '多导睡眠图', en: 'Polysomnography', category: 'intervention', desc: '同步记录脑电、眼电、肌电、心电、呼吸和血氧等参数的金标准睡眠检查技术，用于睡眠障碍诊断。', detail: 'PSG依据Rechtschaffen和Kales标准或AASM标准进行睡眠分期。一次完整诊断性PSG通常需≥6小时记录，包含≥30个生理通道。家庭睡眠呼吸监测（HSAT）是疑似中重度OSA患者的简化替代方案。', refs: [21, 22, 48] },
  { id: 15, name: '脑电图', en: 'Electroencephalography', category: 'intervention', desc: '通过头皮电极记录大脑皮层电活动的技术，是睡眠分期、癫痫诊断和脑功能研究的核心工具。', detail: '睡眠EEG分析包括时域（事件相关电位）、频域（功率谱密度：delta、theta、alpha、sigma、beta、gamma）和时频分析。定量EEG（qEEG）可揭示失眠患者的beta功率增高和NREM慢波活动减少等特征。', refs: [13, 25, 50] },
  { id: 16, name: '睡眠效率', en: 'Sleep Efficiency', category: 'intervention', desc: '总睡眠时间与卧床时间之比的百分比，是衡量睡眠质量的核心指标之一，正常成人通常>85%。', detail: '睡眠效率降低提示睡眠维持困难或卧床时间过长。失眠患者的睡眠效率常<85%。在老年人中，睡眠效率随年龄增长自然下降，部分归因于夜间觉醒次数增加和睡眠片段化。睡眠效率与日间功能状态显著相关。', refs: [21, 23, 25] },
  { id: 17, name: '睡眠潜伏期', en: 'Sleep Latency', category: 'intervention', desc: '从关灯准备入睡到进入N1期睡眠的时间间隔，反映入睡难易程度，正常成人一般<20-30分钟。', detail: '入睡潜伏期延长（>30分钟）是失眠的核心症状之一。多次睡眠潜伏期测试（MSLT）用于评估日间嗜睡程度，平均睡眠潜伏期<8分钟提示病理性嗜睡，是发作性睡病诊断的重要辅助标准。', refs: [21, 23, 50] },
  { id: 18, name: '睡眠结构', en: 'Sleep Architecture', category: 'mechanism', desc: '整夜睡眠中NREM与REM各阶段的比例、时序和循环模式，反映睡眠的组织特征和质量。', detail: '正常成人整夜包含4-6个约90分钟的睡眠周期，前半夜N3（SWS）占优，后半夜REM占比增加。衰老导致SWS和REM减少、觉醒增加。抗抑郁药（如SSRIs）可显著抑制REM睡眠。睡眠结构的破坏与多种神经系统疾病相关。', refs: [3, 10, 50] },
  { id: 19, name: '认知功能', en: 'Cognitive Function', category: 'cognitive', desc: '大脑执行注意、记忆、执行功能、决策和创造力等高级神经活动的能力，对睡眠高度敏感。', detail: '睡眠剥夺导致前额叶皮层功能下降，表现为注意力涣散、工作记忆容量缩减和认知灵活性降低。一晚完全睡眠剥夺后，警觉性下降程度堪比血液酒精浓度0.1%。慢性睡眠不足还与神经退行性疾病风险增加有关。', refs: [9, 17, 26] },
  { id: 20, name: '情绪调节', en: 'Emotion Regulation', category: 'cognitive', desc: '个体监控、评估和修正情绪反应的过程，REM睡眠通过杏仁核-前额叶皮层功能连接的重置发挥关键作用。', detail: '睡眠剥夺增强杏仁核对负面刺激的反应，同时削弱前额叶皮层的 top-down 调控，导致情绪不稳定和负面情绪偏见。REM睡眠可选择性地削弱情绪记忆的杏仁核反应，而保留其事实内容（睡眠抚平情绪）。', refs: [9, 11, 29] },
  { id: 21, name: '阿尔茨海默病', en: 'Alzheimer\'s Disease', category: 'disease', desc: '最常见的神经退行性痴呆，以淀粉样蛋白斑块和神经原纤维缠结为病理特征，睡眠障碍是其早期危险因素和伴随症状。', detail: 'NREM慢波睡眠减少与脑脊液Aβ42升高和皮层tau蛋白沉积加速相关。类淋巴系统（glymphatic system）主要在NREM慢波期活跃，负责清除脑内代谢废物。睡眠障碍可能通过降低Aβ清除和促进神经炎症加速AD进程。', refs: [3, 16, 34] },
  { id: 22, name: '神经退行性疾病', en: 'Neurodegeneration', category: 'disease', desc: '以神经元进行性丢失为特征的疾病群，包括帕金森病、路易体痴呆等，睡眠障碍是其核心非运动症状之一。', detail: 'RBD（REM睡眠行为障碍）是突触核蛋白病的强预测因子，可早于帕金森病和运动神经元病数年甚至数十年出现。睡眠片段化和昼夜节律紊乱通过促进蛋白聚集体积累和氧化应激加剧神经退行性病变。', refs: [16, 20, 34] },
  { id: 23, name: '代谢综合征', en: 'Metabolic Syndrome', category: 'disease', desc: '以腹型肥胖、高血压、高血糖和血脂异常为特征的病理状态，短睡眠时间和睡眠障碍是其重要危险因素。', detail: '睡眠限制通过升高交感神经活性、增加皮质醇和 ghrelin、降低 leptin 促进能量正平衡。OSA相关的间歇性低氧直接损害胰岛素信号通路。改善睡眠时长和质量是代谢综合征非药物管理的重要组成部分。', refs: [24, 29, 42] },
  { id: 24, name: '2型糖尿病', en: 'Type 2 Diabetes', category: 'disease', desc: '以胰岛素抵抗和相对胰岛素缺乏为特征的代谢性疾病，睡眠障碍（尤其是OSA和短睡眠）与发病风险显著增加有关。', detail: '实验性睡眠限制可导致健康人外周胰岛素敏感性降低25-30%。OSA患者糖化血红蛋白（HbA1c）控制更难达标。睡眠碎片化干扰慢波睡眠，损害生长激素脉冲式分泌和葡萄糖稳态。CPAP治疗可改善OSA合并T2DM患者的胰岛素抵抗。', refs: [5, 29, 42] },
  { id: 25, name: '肥胖', en: 'Obesity', category: 'disease', desc: '体内脂肪过度堆积导致健康损害的慢性代谢性疾病，睡眠时间减少是近几十年肥胖流行病的潜在驱动因素之一。', detail: '每晚睡眠<6小时者肥胖风险增加约55%。机制包括：leptin/ghrelin比例失调导致食欲增加；对高热量食物的决策偏好增强；能量消耗减少。睡眠延长干预研究显示，增加睡眠时间可自然减少能量摄入。', refs: [15, 42, 43] },
  { id: 26, name: '心血管疾病', en: 'Cardiovascular Disease', category: 'disease', desc: '影响心脏和血管的疾病总称，包括冠心病、心力衰竭和心律失常，睡眠障碍是其可调控的重要危险因素。', detail: 'OSA与高血压、房颤、心衰和心血管死亡独立相关。失眠和短睡眠通过激活HPA轴和交感神经系统、促进炎症和内皮功能障碍增加心血管风险。睡眠时长呈U型曲线关系，过长（>9h）和过短（<6h）均增加风险。', refs: [5, 7, 49] },
  { id: 27, name: '高血压', en: 'Hypertension', category: 'disease', desc: '动脉血压持续升高的慢性疾病，OSA是其最常见的继发性病因之一，夜间血压非杓型下降提示心血管风险增高。', detail: 'OSA患者夜间反复发生呼吸暂停，导致胸腔负压增加、交感神经爆发性激活和氧化应激，引发血管收缩和血压上升。约50%的OSA患者合并高血压，而30%的高血压患者合并OSA。CPAP治疗可显著降低OSA患者的24小时血压。', refs: [7, 22, 49] },
  { id: 28, name: '炎症反应', en: 'Inflammation', category: 'physiology', desc: '机体对有害刺激的防御性生物反应，急性和慢性睡眠不足均可激活先天免疫系统，促进促炎细胞因子释放。', detail: '睡眠剥夺导致IL-6、TNF-α和CRP水平升高，同时降低抗炎性IL-10。间歇性低氧（如OSA）进一步激活NF-κB通路。慢性低度炎症是连接睡眠障碍与心血管疾病、糖尿病和神经退行性变的共同机制通路。', refs: [24, 29, 41] },
  { id: 29, name: '免疫功能', en: 'Immune Function', category: 'physiology', desc: '机体识别和清除病原体的防御能力，睡眠通过调节细胞因子网络和免疫细胞分布维持免疫稳态。', detail: '慢波睡眠期生长激素和催乳素升高，促进Th1免疫反应和抗病毒防御。睡眠剥夺减少自然杀伤（NK）细胞活性，降低流感疫苗抗体反应，增加上呼吸道感染风险。睡眠-免疫双向调节是行为神经免疫学的核心内容。', refs: [24, 29, 40] },
  { id: 30, name: '细胞因子', en: 'Cytokines', category: 'physiology', desc: '免疫细胞分泌的小分子信号蛋白，在睡眠调节和免疫应答中发挥双重作用，IL-1β和TNF-α还具有促睡眠功能。', detail: '促炎细胞因子IL-1β和TNF-α可直接促进NREM睡眠，特别是慢波睡眠，可能是一种恢复性反应的适应性机制。相反，睡眠剥夺进一步升高这些细胞因子，形成恶性循环。抗炎治疗可能干扰正常睡眠结构。', refs: [24, 29, 40] },
  { id: 31, name: '氧化应激', en: 'Oxidative Stress', category: 'physiology', desc: '活性氧（ROS）产生与抗氧化防御系统之间失衡的状态，睡眠剥夺和间歇性低氧均可加剧氧化应激损伤。', detail: '睡眠剥夺降低超氧化物歧化酶（SOD）和谷胱甘肽过氧化物酶活性，增加丙二醛（MDA）水平。OSA的间歇性低氧-复氧循环模拟缺血-再灌注损伤，产生大量ROS。氧化应激是连接睡眠障碍与代谢和心血管疾病的关键中间环节。', refs: [5, 28, 41] },
  { id: 32, name: '自噬', en: 'Autophagy', category: 'physiology', desc: '细胞通过溶酶体降解受损蛋白质和细胞器的自我清洁过程，对维持神经元健康至关重要，受睡眠-觉醒周期调控。', detail: '睡眠期自噬流增强，有助于清除聚集性蛋白和受损线粒体。睡眠剥夺抑制海马和皮层自噬，导致异常蛋白积累和突触功能障碍。自噬功能障碍与阿尔茨海默病、帕金森病和衰老密切相关。', refs: [6, 10, 34] },
  { id: 33, name: '类淋巴系统', en: 'Glymphatic System', category: 'physiology', desc: '脑内依赖星形胶质细胞水通道蛋白-4（AQP4）的废物清除系统，主要在NREM慢波睡眠期高效运转。', detail: '类淋巴系统在睡眠期间脑脊液流入量显著增加，促进Aβ、tau和α-突触核蛋白等代谢废物清除。麻醉状态也能模拟部分清除效果，但自然睡眠最为高效。衰老和创伤性脑损伤导致类淋巴功能下降，与睡眠障碍形成恶性循环。', refs: [3, 10, 34] },
  { id: 34, name: '脑脊液', en: 'Cerebrospinal Fluid', category: 'physiology', desc: '充满脑室和蛛网膜下腔的无色透明液体，在睡眠期间脉动增强，参与类淋巴系统废物清除和颅内稳态维持。', detail: '近期fMRI研究揭示NREM慢波与脑脊液流速存在高度耦合的振荡模式：每个慢波之后伴随脑脊液流入增加。这种耦合在衰老和阿尔茨海默病中显著减弱，提示睡眠-脑脊液动态是神经退行性疾病早期生物标志物。', refs: [10, 34, 46] },
  { id: 35, name: '血脑屏障', en: 'Blood-Brain Barrier', category: 'physiology', desc: '由脑毛细血管内皮细胞紧密连接形成的保护性屏障，调节血液与脑组织间物质交换，其完整性受睡眠影响。', detail: '睡眠剥夺增加血脑屏障通透性，允许外周炎症因子和有害物质进入中枢。其机制涉及紧密连接蛋白（occludin、claudin-5）表达下调和MMP-9活性增加。血脑屏障功能障碍加剧神经炎症和认知损害。', refs: [13, 28, 34] },
  { id: 36, name: '认知行为疗法', en: 'CBT-I', category: 'intervention', desc: '针对失眠的一线非药物治疗方法，通过纠正不良睡眠认知和行为习惯，重建正常睡眠-觉醒节律。', detail: 'CBT-I包含刺激控制、睡眠限制、认知重构、放松训练和睡眠卫生教育五个核心成分。大量随机对照试验证实其短期疗效与安眠药相当，长期疗效优于药物且无副作用。数字化CBT-I（dCBT-I）提高了治疗可及性。', refs: [17, 18, 21] },
  { id: 37, name: '光疗', en: 'Light Therapy', category: 'intervention', desc: '利用特定强度和波长的光照调节昼夜节律的治疗方法，对季节性情感障碍、时差和昼夜节律睡眠障碍有效。', detail: '早晨强光（≥2500 lux，优选10000 lux）照射可提前睡眠相位，晚间光照则延迟相位。光疗通过激活ipRGC（本质感光视网膜神经节细胞）向SCN传递光信号。蓝光（460-480 nm）效果最强，但需注意视网膜安全性。', refs: [14, 15, 19] },
  { id: 38, name: '运动干预', en: 'Exercise Intervention', category: 'intervention', desc: '通过规律体育活动改善睡眠质量和时长的非药物干预手段，是失眠和OSA的重要辅助管理策略。', detail: '中等强度有氧运动可增加SWS和睡眠连续性，但临睡前剧烈运动可能因体温升高和交感神经兴奋而延迟入睡。运动改善睡眠的机制包括体温调节、抗炎作用、BDNF升高和焦虑抑郁症状缓解。太极拳和瑜伽对老年人失眠尤其有益。', refs: [17, 18, 19] },
  { id: 39, name: '营养与睡眠', en: 'Nutrition & Sleep', category: 'intervention', desc: '膳食成分和进食时间对睡眠质量和昼夜节律的调控作用，特定营养素可作为睡眠健康的膳食干预靶点。', detail: '色氨酸是合成血清素和褪黑素的前体；镁缺乏与失眠相关；维生素D水平与睡眠障碍负相关；高碳水化合物晚餐可缩短入睡潜伏期但可能降低睡眠质量。时间营养学（chrononutrition）强调进食时间与生物钟同步的重要性。', refs: [42, 43, 47] },
  { id: 40, name: '肠道菌群', en: 'Gut Microbiota', category: 'physiology', desc: '定居于肠道内的微生物群落，通过肠-脑轴（gut-brain axis）双向调节睡眠、情绪和免疫功能。', detail: '肠道菌群具有自身的昼夜节律，睡眠剥夺可迅速改变菌群组成（如减少厚壁菌门/拟杆菌门比值）。菌群代谢产物（短链脂肪酸、色氨酸代谢物）通过迷走神经和免疫途径影响中枢睡眠调节。益生菌补充在部分研究中显示出改善睡眠的潜力。', refs: [5, 42, 47] },
  { id: 41, name: '睡眠卫生', en: 'Sleep Hygiene', category: 'intervention', desc: '促进健康睡眠的环境和行为习惯集合，是各类睡眠障碍教育和预防的基础内容。', detail: '核心睡眠卫生原则包括：保持规律作息；避免午后咖啡因和睡前酒精；营造黑暗、安静、凉爽的睡眠环境；限制睡前屏幕暴露（蓝光抑制褪黑素）；仅在困倦时上床；避免在床上进行非睡眠活动。单独使用效果有限，需作为CBT-I的组成部分。', refs: [17, 18, 21] },
  { id: 42, name: '轮班工作', en: 'Shift Work', category: 'disease', desc: '非标准工作时间（如夜班、轮班）导致的睡眠-觉醒周期与内在昼夜节律错位，增加多种疾病风险。', detail: '轮班工作睡眠障碍（SWSD）表现为工作时过度嗜睡和休息期失眠。长期轮班与肥胖、T2DM、心血管疾病和乳腺癌风险增加相关，WHO将其列为2A类致癌因素。对策包括优化轮班方向（顺时针）、安排战略性小睡和定时光暴露。', refs: [8, 15, 19] },
  { id: 43, name: '时差反应', en: 'Jet Lag', category: 'disease', desc: '跨多个时区旅行后，体内生物钟与新环境光-暗周期暂时失同步所导致的睡眠和日间功能受损状态。', detail: '时差严重程度与时区跨越数量相关，向东旅行通常比向西更难适应。预适应策略（pre-adaptation）和目的地定时光暴露/避光可加速再同步。褪黑素在向东旅行时睡前服用有助于相位提前。新型食欲素受体拮抗剂也被探索用于时差治疗。', refs: [14, 30, 37] },
  { id: 44, name: '不宁腿综合征', en: 'Restless Legs Syndrome', category: 'disease', desc: '以静息状态下双下肢难以名状的不适感和活动欲望为特征的神经系统感觉运动障碍，夜间加重并干扰睡眠。', detail: 'RLS病理机制涉及铁代谢障碍（脑内铁缺乏）和多巴胺能系统功能异常。诊断需满足URLSSG四大核心标准。继发性RLS与妊娠、终末期肾病和铁缺乏相关。多巴胺受体激动剂（如普拉克索）和α-2-δ配体（如加巴喷丁）是主要治疗药物。', refs: [12, 22, 23] },
  { id: 45, name: '发作性睡病', en: 'Narcolepsy', category: 'disease', desc: '以不可抗拒的日间嗜睡、猝倒、睡眠瘫痪和入睡期幻觉为特征的慢性睡眠-觉醒障碍，分为1型和2型。', detail: '发作性睡病1型由下丘脑分泌素（食欲素）神经元自身免疫性破坏导致，90%以上患者携带HLA-DQB1*06:02。诊断依靠多导睡眠图和多次睡眠潜伏期测试（MSLT）。治疗包括羟丁酸钠、替洛利生、莫达非尼和行为管理策略。', refs: [11, 21, 37] },
  { id: 46, name: '异态睡眠', en: 'Parasomnia', category: 'disease', desc: '发生在入睡、睡眠期间或觉醒过程中的异常行为、体验或生理事件，可分为NREM相关、REM相关和其他类型。', detail: 'NREM异态睡眠包括梦游、夜惊和意识模糊性觉醒，多见于儿童，与SWS期觉醒相关。REM睡眠行为障碍（RBD）是梦境演绎行为，与突触核蛋白病高度相关。创伤相关睡眠障碍和爆炸头综合征也属于此类。', refs: [20, 23, 48] },
  { id: 47, name: '梦与梦境', en: 'Dreaming', category: 'cognitive', desc: '睡眠期间（主要是REM期）产生的主观意识体验，涉及情绪处理、记忆整合和创造性问题解决。', detail: '梦的内容具有高度情绪化和视觉化特征，前额叶皮层去激活导致逻辑判断和自我监控减弱。梦魇障碍和RBD是病理性梦境相关疾病。清醒梦（lucid dreaming）指做梦者意识到自己在做梦的状态，可通过训练诱发，用于创伤后应激治疗。', refs: [9, 11, 20] },
  { id: 48, name: '睡眠与衰老', en: 'Sleep & Aging', category: 'mechanism', desc: '衰老过程伴随睡眠结构的特征性改变，包括SWS减少、睡眠片段化和昼夜节律相位提前。', detail: '老年人总睡眠时间可能变化不大，但睡眠效率显著下降，夜间觉醒次数增加。下丘脑SCN神经元丢失和褪黑素分泌减少是核心机制。衰老相关的睡眠障碍增加跌倒、认知衰退和死亡率风险，但常被误认为正常老化而忽视。', refs: [3, 16, 50] },
  { id: 49, name: '儿童睡眠', en: 'Pediatric Sleep', category: 'intervention', desc: '从婴幼儿到青少年不同发育阶段的睡眠特征和需求，儿童期睡眠问题可影响神经发育和行为表现。', detail: '新生儿每日需14-17小时睡眠，学龄儿童9-12小时，青少年8-10小时。儿童阻塞性睡眠呼吸暂停常表现为行为问题而非嗜睡。儿童失眠行为治疗（如睡前程序、逐步消退法）是首选干预。青少年睡眠相位延迟与社会学校日程冲突是公共健康问题。', refs: [17, 18, 47] },
  { id: 50, name: '睡眠医学', en: 'Sleep Medicine', category: 'intervention', desc: '研究、诊断和治疗睡眠障碍的交叉学科领域，涵盖神经科学、呼吸病学、精神病学、耳鼻喉科和口腔颌面外科等。', detail: '睡眠医学自20世纪70年代R. Guilleminault和W. Dement等先驱建立以来，已发展为独立专科。AASM（美国睡眠医学会）制定国际通用的诊断标准和编码。远程医疗和可穿戴设备正在推动睡眠医学的数字化和普惠化转型。', refs: [21, 22, 48] }
];

const grid = document.getElementById('keywordsGrid');
const searchInput = document.getElementById('searchInput');
const filterTabs = document.getElementById('filterTabs');
const modalOverlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const literatureList = document.getElementById('literatureList');

let currentCategory = 'all';
let currentQuery = '';

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderKeywords() {
  grid.innerHTML = '';
  const filtered = keywords.filter(k => {
    const matchCategory = currentCategory === 'all' || k.category === currentCategory;
    const q = currentQuery.toLowerCase();
    const matchQuery = !q || k.name.includes(q) || k.en.toLowerCase().includes(q) || k.desc.includes(q);
    return matchCategory && matchQuery;
  });

  filtered.forEach(k => {
    const cat = categories[k.category];
    const card = document.createElement('div');
    card.className = 'keyword-card';
    card.innerHTML = `
      <span class="keyword-category ${cat.class}">${cat.label}</span>
      <div class="keyword-name">${k.name}</div>
      <div class="keyword-en">${k.en}</div>
      <div class="keyword-desc">${k.desc}</div>
      <div class="keyword-meta">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        <span>${k.refs.length} 篇关联文献</span>
      </div>
    `;
    card.addEventListener('click', () => openModal(k));
    grid.appendChild(card);
  });
}

function openModal(k) {
  const cat = categories[k.category];
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  const refsHtml = k.refs.map(rid => {
    const lit = literature.find(l => l.id === rid);
    if (!lit) return '';
    const pdfPath = './' + encodeURIComponent(lit.name);
    return `
      <a class="modal-lit-item" href="${pdfPath}" target="_blank" rel="noopener">
        <span class="modal-lit-num">${lit.id}</span>
        <span>${escapeHtml(lit.name)} <span style="opacity:0.7">(${escapeHtml(lit.hint)})</span></span>
        <svg style="margin-left:auto;flex-shrink:0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </a>
    `;
  }).join('');

  modalBody.innerHTML = `
    <span class="modal-category ${cat.class}">${cat.label}</span>
    <h3 class="modal-title">${escapeHtml(k.name)}</h3>
    <div class="modal-en">${escapeHtml(k.en)}</div>
    <div class="modal-section">
      <h4>定义概述</h4>
      <p>${escapeHtml(k.desc)}</p>
    </div>
    <div class="modal-section">
      <h4>详细解读</h4>
      <p>${escapeHtml(k.detail)}</p>
    </div>
    <div class="modal-section">
      <h4>关联文献</h4>
      <div class="modal-literature">${refsHtml}</div>
    </div>
  `;
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

function renderLiterature() {
  literatureList.innerHTML = '';
  literature.forEach(lit => {
    const pdfPath = './' + encodeURIComponent(lit.name);
    const item = document.createElement('div');
    item.className = 'literature-item';
    item.innerHTML = `
      <div class="literature-info">
        <span class="literature-num">${lit.id}</span>
        <span class="literature-name">${escapeHtml(lit.name)}</span>
      </div>
      <div class="literature-actions">
        <span class="btn-sm">${escapeHtml(lit.hint)}</span>
        <a class="btn-sm" href="${pdfPath}" target="_blank" rel="noopener">预览</a>
      </div>
    `;
    literatureList.appendChild(item);
  });
}

searchInput.addEventListener('input', e => {
  currentQuery = e.target.value.trim();
  renderKeywords();
});

filterTabs.addEventListener('click', e => {
  if (e.target.classList.contains('tab')) {
    filterTabs.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    e.target.classList.add('active');
    currentCategory = e.target.dataset.category;
    renderKeywords();
  }
});

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

renderKeywords();
renderLiterature();
