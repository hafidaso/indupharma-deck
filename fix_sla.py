
import sys
with open('src/App.tsx', 'r') as f:
    lines = f.readlines()
for i, line in enumerate(lines):
    if 'confiance opérationnelle' in line and '<p' in line and i > 1150:
        # line i is the <p>...</p>
        # line i+1 is the </div>
        # line i+2 is the </div> of the content
        insertion = """              <div className="mt-10 p-6 bg-purple-50 border-l-4 border-purple-400 rounded-2xl flex items-start gap-4">
                <Clock size={32} className="text-purple-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-xs font-bold uppercase tracking-widest text-purple-700 mb-2">N.B. : les SLA</span>
                  <span className="text-sm text-purple-900 font-medium">
                    La solution permet de réduire significativement les SLA en accélérant la détection, la prise de décision et la résolution des incidents : le passage d’une détection tardive à une surveillance en temps réel diminue les temps d’arrêt, améliore le MTTR et garantit une intervention rapide, assurant ainsi une continuité opérationnelle et une conformité renforcée.
                  </span>
                </div>
              </div>
"""
        lines.insert(i + 2, insertion)
        break
with open('src/App.tsx', 'w') as f:
    f.writelines(lines)
