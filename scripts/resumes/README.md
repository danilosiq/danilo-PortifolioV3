# Currículos do portfólio

Edite `content.json` para atualizar os três idiomas. O conteúdo mantém as informações
confirmadas: Exban de fevereiro de 2026 até o presente; Ibolt de maio de 2025 até
janeiro de 2026; graduação em andamento e inglês B1. A contribuição em mensageria
abrange fluxos de usuário, visão de produto e design, sem atribuir decisões de
infraestrutura nem métricas não comprovadas.

Para gerar os PDFs, execute `python3 scripts/resumes/generate.py` em um ambiente com
`reportlab` e `pypdf`. O gerador usa Arial regular e bold da pasta de fontes do macOS;
em outro ambiente, configure `RESUME_FONT_DIR` para uma pasta com `Arial.ttf` e
`Arial Bold.ttf`. As fontes são incorporadas ao PDF.

Os arquivos finais ficam em `output/pdf/` e `public/resumes/`. O endereço antigo
`public/cv.pdf` recebe a versão em português. Os PDFs usam texto selecionável,
coluna única e títulos convencionais; a geração verifica uma página por idioma e
extração de texto. Isso não equivale a teste em um ATS específico.

Depois de mudar o conteúdo, renderize e confira visualmente cada PDF. Ajuste o
conteúdo ou espaçamento se a verificação de uma página falhar, sem reduzir a
legibilidade. Para uma vaga específica, adapte o resumo e a ordem das competências
à descrição da vaga mantendo apenas informações verdadeiras.
