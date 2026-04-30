# Notes de Présentation - INDUPHARMA

### Slide 1 - INDUPHARMA
**Note**: Bonjour à toutes et à tous. Chaque heure d'arrêt non planifié peut coûter jusqu'à 500 000 dollars. C'est pour répondre à ce défi majeur que nous avons construit INDUPHARMA, une solution conçue pour réduire les arrêts dans un environnement pharmaceutique, en combinant IoT, Fusion AI et dashboards de pilotage.
**Transition**: Avant de présenter la solution, il faut d’abord comprendre le problème terrain.

---

### Slide 2 - Team
**Note**: Voici l'équipe derrière INDUPHARMA. Nous combinons des expertises en architecture IIoT, IA, Frontend et Hardware pour une solution end-to-end.
**Transition**: Maintenant que vous connaissez l'équipe, abordons le problème que nous résolvons.

---

### Slide 3 - Pourquoi ce projet ?
**Note**: Question critique sur le coût du downtime.
**Transition**: La réponse va changer votre façon de voir la maintenance industrielle.

---

### Slide 4 - La réalité du terrain
**Note**: Au-delà des chiffres financiers, la réalité quotidienne est marquée par des frictions opérationnelles majeures : rapports papiers, délais de détection et manque de visibilité sur l'Audit Trail.
**Transition**: Pour transformer cette réalité, nous avons défini une vision stratégique claire : passer de la surveillance passive à l’action augmentée.

---

### Slide 5 - Vision Stratégique
**Note**: Notre projet ne se contente pas d'être une interface technique. C'est une vision de l'industrie pharmaceutique de demain : connectée, résiliente et centrée sur la performance. Cette vision définit notre objectif 'North Star'.
**Transition**: Cette vision se concrétise à travers un cas d’usage critique : l’autoclave M02.

---

### Slide 6 - Use case : Autoclave M02
**Note**: Nous avons choisi l’autoclave M02 comme cas démonstratif parce qu’il s’agit d’un équipement critique. Ce use case permet de montrer toute la chaîne de valeur : détection, transmission, analyse, décision et pilotage.
**Transition**: Pour éviter de construire une solution uniquement technique, nous avons utilisé une méthodologie de cadrage.

---

### Slide 7 - Notre méthodologie
**Note**: Nous ne sommes pas partis directement de la technologie. Nous sommes partis du besoin. Cette approche permet de convaincre un jury mixte, car elle montre que la solution répond à un problème réel et structuré.
**Transition**: Grâce à cette méthode, nous avons comparé le processus actuel et le processus cible.

---

### Slide 8 - De l’As-Is au To-Be
**Note**: Le BPMN nous a permis de visualiser le saut de maturité du processus. L’objectif n’est pas seulement d’ajouter des capteurs, mais de transformer la manière dont l’incident est détecté, traité et suivi.
**Transition**: Cette transformation prend forme dans une solution intégrée : INDUPHARMA.

---

### Slide 9 - Architecture & Choix Techniques
**Note**: Pourquoi ces choix ? L'ESP32 pour son coût et sa robustesse, MQTT pour sa légèreté temps réel, et Fusion AI pour son orchestration no-code qui nous permet d'être agiles. On ne construit pas juste un gadget, on construit un système industriel scalable.
**Transition**: Cette architecture repose sur des choix technologiques précis pour garantir performance et scalabilité.

---

### Slide 10 - Le moteur d’orchestration
**Note**: Fusion AI joue le rôle de moteur d’orchestration. Il permet de recevoir les données terrain, de les transmettre aux dashboards et surtout de poursuivre le workflow après une action humaine sur le dashboard technique.
**Transition**: Cette orchestration est rendue possible par une boucle bidirectionnelle entre Fusion AI et nos dashboards.

---

### Slide 11 - Boucle bidirectionnelle Fusion AI ↔ Dashboards
**Note**: Dans la version actuelle du projet, nous avons construit une logique très importante pour l’automatisation : une boucle bidirectionnelle entre Fusion AI et les dashboards. Fusion AI alimente le dashboard avec les données reçues, et le dashboard technique renvoie les actions du technicien vers Fusion AI. Cela permet de suivre tout le cycle de vie d’un incident.
**Transition**: Cette architecture prend vie à travers deux interfaces complémentaires.

---

### Slide 12 - Dashboard Live
**Note**: Voici la plateforme en action. C'est un environnement live qui connecte les capteurs aux dashboards. Notez l'interface épurée et la réactivité des données. En cas de coupure réseau, nous avons prévu des visuels de secours pour garantir la continuité de la présentation.
**Transition**: Cette plateforme n'est pas seulement un outil, elle produit des indicateurs de performance mesurables.

---

### Slide 13 - Indicateurs 2026
**Note**: Ces chiffres ne sont pas des projections. Ils sont extraits en temps réel de notre dashboard live au moment où nous vous parlons. Notez le MTTR descendu à 29 minutes grâce à l'orchestration automatique.
**Transition**: Ces indicateurs permettent ensuite de fixer des objectifs de performance.

---

### Slide 14 - Objectifs de performance
**Note**: Ici, nous parlons d’impact opérationnel mesuré. Notre force est d’avoir transformé une vision qualitative en une boucle de réponse quantifiée et traçable.
**Transition**: Au-delà du prototype, ce problème correspond aussi à une opportunité de marché réelle.

---

### Slide 15 - Une opportunité réelle
**Note**: Nous ne sommes pas sur un marché de niche. Toutes les usines pharmaceutiques cherchent à réduire leur downtime. Notez la spécificité du segment Pharma IIoT (~28 Md$) qui est notre cible prioritaire. La maturité IIoT est devenue une nécessité réglementaire et économique.
**Transition**: Cette opportunité se traduit par des impacts concrets à plusieurs niveaux.

---

### Slide 16 - Différenciation Stratégique
**Note**: Des solutions existent, mais INDUPHARMA se distingue par une boucle opérationnelle ciblée sur le downtime pharmaceutique. Là où d'autres font du monitoring large, nous faisons de l'action synchrone.
**Transition**: Cette différenciation est ce qui garantit un impact maximal sur le terrain.

---

### Slide 17 - Impact global
**Note**: L’impact est désormais chiffré : ROI de 70%, 91% de taux de clôture des incidents, et une élimination totale du papier. C'est un gain de confiance opérationnelle autant que financière.
**Transition**: Pour rendre ce projet viable, nous avons imaginé un business model simple.

---

### Slide 18 - ROI en 12 mois
**Note**: Détail du ROI : 240k MAD d'investissement (Matériel, Intégration, Formation) vs 410k MAD de gains (réduction downtime sur 2 lignes critiques). Le break-even est atteint à 7 mois.
**Transition**: Après la rentabilité, nous montrons le scénario opérationnel en 30 secondes.

---

### Slide 19 - Scénario opérationnel
**Note**: Cette séquence de 30 secondes montre la réactivité du système. Notez que les 8 secondes d'orchestration sont validées par nos logs API. Ce cycle كامل aboutit à un MTTR réel de 29 minutes sur le site pilote.
**Transition**: Après la démo, comment déployons-nous cette solution ? Voici notre stratégie Go-to-Market.

---

### Slide 20 - Go-to-Market & Deployment Plan
**Note**: Plan de déploiement chiffré : 240k MAD pour le pilote (Phase 1), puis expansion via ROI (Phase 2). La Phase 3 standardise les SOP et le benchmark inter-sites.
**Transition**: Le scale doit rester conforme GMP, d’où la gouvernance et compliance.

---

### Slide 21 - Governance & Compliance
**Note**: La conformité est au cœur du design : ALCOA+ est implémenté nativement (ex: timestamp/signature auto). Le RBAC (Ops, Admin, QA) est actif dans le dashboard.
**Transition**: Nous pouvons conclure sur la promesse stratégique du projet.

---

### Slide 22 - Conclusion
**Note**: Merci de nous avoir écoutés. INDUPHARMA répond à un problème concret : réduire les arrêts non planifiés et améliorer la traçabilité. Nous concluون sur nos 3 piliers de réussite.
**Transition**: Fin de la présentation.

---

### Slide 23 - Accès Live Dashboard
**Note**: Pour conclure, nous vous invitons à tester par vous-mêmes. Scannez ce QR code pour accéder à l'environnement live et voir la synchronisation en temps réel.
**Transition**: Nous sommes maintenant prêts pour vos questions.
