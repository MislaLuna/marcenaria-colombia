import cozinha from '../assets/cozinha-escura.jpg'
import guardaRoupa from '../assets/guarda-roupa.jpg'
import painel from '../assets/painel-tv-1.jpg'

// Imagens representam a CATEGORIA, não um projeto específico (associação por projeto: a confirmar).
export const featured = [
  { id: 'cozinha', title: 'Cozinhas planejadas', ambiente: 'Cozinha', image: cozinha, alt: 'Cozinha planejada em MDF escuro com bancada preta e iluminação embutida', text: '[DESCRIÇÃO DO PROJETO]' },
  { id: 'guarda-roupa', title: 'Guarda-roupas', ambiente: 'Dormitório', image: guardaRoupa, alt: 'Guarda-roupa com portas de correr em acabamento amadeirado claro', text: '[DESCRIÇÃO DO PROJETO]' },
  { id: 'painel', title: 'Painéis de TV', ambiente: 'Sala', image: painel, alt: 'Painel de TV branco com ripados cinza e rack suspenso com gavetas', text: '[DESCRIÇÃO DO PROJETO]' },
  { id: 'personalizado', title: 'Móveis personalizados', ambiente: '[INFORMAÇÃO A CONFIRMAR]', image: null, alt: '', text: '[DESCRIÇÃO DO PROJETO]' },
]
export const steps = [
  ['01','Primeiro contato e orçamento','O cliente apresenta a necessidade e conversamos sobre as possibilidades.'],
  ['02','Definição do projeto','Os desenhos são discutidos e ajustados até chegar à solução desejada.'],
  ['03','Produção','O projeto segue para a oficina, com o material organizado e o prazo acompanhado.'],
  ['04','Entrega e montagem','O móvel é entregue e montado no espaço do cliente.'],
]
export const diferenciais = [
  ['Personalização','Cada móvel é desenhado para o espaço e para o gosto de quem vai usá-lo.'],
  ['Atenção aos detalhes','O projeto é conversado e refeito quantas vezes for preciso.'],
  ['Acompanhamento próximo','Diálogo com o cliente durante todo o desenvolvimento.'],
  ['Experiência prática','Conhecimento construído no dia a dia da oficina e passado em família.'],
  ['Qualidade na execução','Do desenho à montagem, o mesmo cuidado.'],
]
