import React from 'react'
import SEO from '../components/Seo'
import InstagramFeed from '../components/InstagramFeed'

export default function Acessorios() {
  return (
    <React.Fragment>
      <SEO title="FAQ
      " />
      <div>
        <div className="col-md-12">
          <h1>Perguntas Frequentes</h1>
        </div>
        <div className="col-md-6">
          <div className="boxCategory" id="operacao">
            <h2>OPERAÇÃO</h2>
            <li>
              <a className="item_list--question">Os itens são originais?</a>
              <div className="questionBox">
                <p className="item_list--text">
                  Sim. Somos uma plataforma de aluguel de itens especiais com curadoria apurada.
                </p>
                <a href="" target="_blanck" className="linkVideo" />
                <a href="#linkInfo" />
              </div>
            </li>
            <li>
              <a className="item_list--question">Como funciona?</a>
              <div className="questionBox">
                <p className="item_list--text">
                  Somos uma plataforma de aluguel de itens originais. Pense no ClosetBoBags como um
                  closet online e virtual: você pega algumas peças que gostaria de usar por um
                  tempo, usa, devolve (e, se amar, muitas estão a venda). É só navegar pelo site e
                  escolher o item (ou os itens) e o período pelo qual deseja alugar. E pronto! itens
                  de festa, de inverno e malas possuem a opção de agendamento. Para os demais itens,
                  o envio é imediato com prazo de até 4 dias úteis(RJ e SP em até 2 dias - podendo
                  ser entregue no mesmo dia). Ficou com dúvidas? Segue um videozinho curto
                  explicando o processo:
                </p>
                <a href="https://www.youtube.com/watch?v=qi5WUuuTXFo" target="_blanck">
                  https://www.youtube.com/watch?v=qi5WUuuTXFo
                </a>
                <a href="#linkInfo" />
              </div>
            </li>
            <li>
              <a className="item_list--question">Tem cupom de desconto para primeiro aluguel?</a>
              <div className="questionBox">
                <p className="item_list--text">
                  Sim! O cupom é o PROMO10 e você precisa estar logada para a plataforma identificar
                  que esse será seu primeiro aluguel. É só usá-lo no checkout.
                </p>
                <a href="" target="_blanck" className="linkVideo" />
                <a href="#linkInfo" />
              </div>
            </li>
            <li>
              <a className="item_list--question" id="linkInfo" target="">
                Como faço para devolver o item?
              </a>
              <div className="questionBox">
                <p className="item_list--text">
                  Para a devolução, temos 3 opções: 1) Você pode deixar em um de nossos escritórios,
                  em SP, no Itaim, ou no RJ, Ipanema; 2) Você pode adquirir o serviço de coleta
                  domiciliar - dessa forma faremos a coleta na sua residência ou 3) Você pode postar
                  via sedex para nosso escritório de SP ou do RJ. Ainda ficou com dúvidas? Segue
                  aqui um vídeo curtinho explicando o processo:
                </p>
                <a href="https://www.youtube.com/watch?v=qYC1Nrg7RYI" target="_blanck">
                  https://www.youtube.com/watch?v=qYC1Nrg7RYI
                </a>
                <a href="#linkInfo" />
              </div>
            </li>
            <li>
              <a className="item_list--question">
                Amei e quero ficar mais tempo com o item, como faço?
              </a>
              <div className="questionBox">
                <p className="item_list--text">
                  Para você renovar o seu aluguel é só fazer seu login no site, ir em "meus pedidos"
                  e clicar no + ao lado do pedido que você quer renovar. Lá, você verá a opção
                  "renovar aluguel". É só clicar e selecionar por quanto tempo você quer renovar e
                  pronto! Ficou com dúvidas? Segue um videozinho curto explicando o processo:
                </p>
                <a href="https://www.youtube.com/watch?v=BhOt-XAKYtA" target="_blanck">
                  https://www.youtube.com/watch?v=BhOt-XAKYtA
                </a>
                <a href="#linkInfo" />
              </div>
            </li>
            <li>
              <a className="item_list--question">Amei e quero comprar, como faço?</a>
              <div className="questionBox">
                <p className="item_list--text">
                  Ao iniciar o seu aluguel, você terá a chance de fazer uma oferta pelo item
                  alugado. Para fazer isso, é só fazer seu login, ir em “meus pedidos” e lá você
                  verá a opção de realizar a oferta.{' '}
                </p>
                <a href="" target="_blanck" className="linkVideo" />
                <a href="#linkInfo" />
              </div>
            </li>
            <li>
              <a className="item_list--question">
                Aluguei dois itens e gostaria de devolver um e ficar mais um tempo com o outro. É
                possível?
              </a>
              <div className="questionBox">
                <p className="item_list--text">
                  Sim, é possível. Se o item que você gostaria de ficar mais tempo for um item
                  renovável, é só você fazer o login,ir em “meus pedido” e lá você verá a opção de
                  renovação. Quanto ao outro item, é só devolver dessa forma
                </p>
                <a href="" target="_blanck" className="linkVideo" />
                <a href="#linkInfo">(Clique aqui “como devolver”).</a>
              </div>
            </li>
            <li>
              <a className="item_list--question">
                Quando eu fechei o pedido eu não optei pela coleta domiciliar, mas agora mudei de
                ideia. Como faço para comprar o serviço?
              </a>
              <div className="questionBox">
                <p className="item_list--text">
                  É só enviar um email para atendimento@bobags.com.br solicitando o link para
                  pagamento da coleta domiciliar.
                </p>
                <a href="" target="_blanck" className="linkVideo" />
                <a href="#linkInfo" />
              </div>
            </li>
            <li>
              <a className="item_list--question">
                Recebi o meu item e gostaria de trocar. Como eu faço?
              </a>
              <div className="questionBox">
                <p className="item_list--text">
                  Só precisa nos informar assim que receber que gostaria de trocar e, caso já saiba,
                  por qual item. Lembrando que o aluguel é uma ótima forma de experimentar seu
                  compromisso da compra.{' '}
                </p>
                <a href="" target="_blanck" className="linkVideo" />
                <a href="#linkInfo" />
              </div>
            </li>
            <li>
              <a className="item_list--question">
                Está aparecendo uma mensagem de que a data escolhida não possui intervalo mínimo
                entre aluguéis. O que significa?
              </a>
              <div className="questionBox">
                <p className="item_list--text">
                  Qual seria o item e para qual data você gostaria de alugar? Provavelmente você não
                  está conseguindo agendar porque o site calcula uma carência de dias em relação ao
                  aluguel anterior e aluguel posterior da(s) peça(s).
                </p>
                <a href="" target="_blanck" className="linkVideo" />
                <a href="#linkInfo" />
              </div>
            </li>
            <li>
              <a className="item_list--question">
                Estou finalizando um pedido mas não aparece a data que quero receber, como faço?
              </a>
              <div className="questionBox">
                <p className="item_list--text">
                  Provavelmente esse item que você selecionou não é "agendável". Itens de festa, por
                  ex, possuem a opção de agendamento. Itens do dia-a-dia precisam estar disponíveis
                  para serem alugados e o envio deles é imediato. Nos envie um whatsapp ou email
                  para atendimento@bobags.com.br
                </p>
                <a href="https://www.youtube.com/watch?v=qi5WUuuTXFo" target="_blanck">
                  https://www.youtube.com/watch?v=qi5WUuuTXFo
                </a>
                <a href="#linkInfo" />
              </div>
            </li>
            <li>
              <a className="item_list--question">
                O que acontece se o item alugado for danificado?
              </a>
              <div className="questionBox">
                <p className="item_list--text">
                  Nós esperamos que você cuide de nossas bolsas como se fosse de uma amiga e que
                  você retorne o produto de forma semelhante a de quando recebeu. Entendemos que a
                  bolsa sofrerá desgaste com o uso diário e não há taxa adicional para tal
                  ocorrência. Porém, em caso de mau uso ou quebras que vão além do desgaste pelo uso
                  comum ou mesmo perda, será cobrada uma quantia equivalente pelo reparo ou pela
                  substituição da peça. Alguns itens, entretanto, são de difícil substituição e sua
                  multa poderá ser de até o preço de venda.
                </p>
                <a href="" target="_blanck" className="linkVideo" />
                <a href="#linkInfo" />
              </div>
            </li>
            <li>
              <a className="item_list--question">O meu aluguel vence em um sábado. O que fazer?</a>
              <div className="questionBox">
                <p className="item_list--text">
                  Caso o vencimento seja no sábado, domingo ou feriado a devolução será feita no
                  próximo dia útil.
                </p>
                <a href="" target="_blanck" className="linkVideo" />
                <a href="#linkInfo" />
              </div>
            </li>
          </div>
          <div className="boxCategory" id="financa">
            <h2>FINANCEIRO</h2>
            <li>
              <a className="item_list--question">Como é feito o pagamento na plataforma?</a>
              <div className="questionBox">
                <p className="item_list--text">
                  Todos os pagamentos são realizados via cartão de crédito e você pode parcelar em
                  até 6x sem juros.
                </p>
                <a href="" target="_blanck" className="linkVideo" />
                <a href="#linkInfo" />
              </div>
            </li>
            <li>
              <a className="item_list--question">Como funciona o caução?</a>
              <div className="questionBox">
                <p className="item_list--text">
                  Em casos descritos nos Termos e Condições, como a não devolução do item, ou caso a
                  peça retorne com algum dano ou avaria, ele será cobrado. Mas, você será
                  previamente comunicado, evitando assim, qualquer surpresa. Além disso, como nenhum
                  valor é cobrado no momento do aluguel, o valor caução não compromete o limite do
                  seu cartão de crédito.
                </p>
                <a href="" target="_blanck" className="linkVideo" />
                <a href="#linkInfo" />
              </div>
            </li>
            <li>
              <a className="item_list--question">Cancelamento de pedidos. Como funciona?</a>
              <div className="questionBox">
                <p className="item_list--text">
                  Cancelamentos só serão aceitos com até um mês da data do pedido. Após esse período
                  o valor será disponibilizado na forma de crédito na plataforma, com 6 meses de
                  validade.
                </p>
                <a href="" target="_blanck" className="linkVideo" />
                <a href="#linkInfo" />
              </div>
            </li>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
