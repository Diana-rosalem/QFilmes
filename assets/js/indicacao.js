//função do sorteio   
function sorteioindicacao(){ 
    //var sorteio=2
        //Jogada do sorteio
        var sorteio = 1 + Math.floor(Math.random()*35)
        
        //ver qual filme foi sorteado
        if (sorteio==1) {
            var titulo = "Seven: Os Sete Crimes Capitais";
            var descricao = "Um detetive de homicídios veterano e seu novo parceiro caçam um assassino em série que baseia seus crimes nos setes pecados capitais.";
            var ator ="Brad Pitt, Morgan Freeman, Gwyneth Paltrow";
            var diretor = "David Fincher";
            var nota = "90%";
            var genero = "Suspence";
            var data =  "1995";
            var foto =  '<img src="assets/img/6001.gif" height="280" width="420" style="vertical-align: left;">';
            
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto

               
        }
        else if (sorteio==2) {
            var titulo = "Rastros de um Sequestro";
            var descricao =  "Quando seu irmão é sequestrado e retorna totalmente diferente sem se lembrar dos últimos 19 dias, o jovem Jin-Seok embarca em uma perigosa jornada em busca da verdade.";
            var ator =  "Han Da-eun, Kang Ha Neul, Kim Mu-Yeol";
            var diretor ="Jang Hang-jun" ;
            var nota ="93%" ;
            var genero = "Suspence";
            var data =  "2017";
            var foto =  '<img src="assets/img/6010.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML = data
            document.getElementById("fotofilme").innerHTML = foto;
        }   
        else if (sorteio==3) {
            var titulo = "Psicose";
            var descricao = "Quando uma funcionária de imobiliária comete um roubo e foge com um Monte de dinheiro,esperando começar uma nova vida, ela acaba no famoso Hotel Bates.";
            var ator = "Anthony Perkins, Janet Leigh, John Gavin";
            var diretor = "Alfred Hitchcock";
            var nota = "86%";
            var genero = "Suspence";
            var data = "1960" ;
            var foto =  '<img src="assets/img/6011.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML = data
            document.getElementById("fotofilme").innerHTML = foto;
        }
        else if (sorteio==4) {
            var titulo = "Truque de Mestre";
            var descricao = "Um grupo de ilusionistas se especializa em roubar bancos e dar o dinheiro para o público encontro de despista agentes do FBI.";
            var ator ="Jesse Eisenberg, Mark Ruffalo, Woody Harrelson" ;
            var diretor = "Louis Leterrier";
            var nota =  "93%";
            var genero = "Suspence";
            var data = "2013" ;
            var foto =  '<img src="assets/img/6020.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto;
        }
        else if (sorteio==5) {
            var titulo =  "Invasão Zumbi";
            var descricao = "Enquanto o país é assolado por uma epidemia de zumbis, pai e filha partem em uma jornada de trem angustiante tentando chegar à única cidade que ainda não foi afetada.";
            var ator = "Gong Yoo, Jung Yu-mi, Ma Dong-seok" ;
            var diretor =  "Yeon Sang-ho";
            var nota = "96%";
            var genero = "Terror";
            var data =  "2016";
            var foto =  '<img src="assets/img/7014.gif" height="280" width="420" style="vertical-align: left;">'; 
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto;
        }
        else if (sorteio==6) {
            var titulo =  "Poltergeist";
            var descricao = "Neste remake do clássico de terror, uma família descobre que a casa para qual se mudou é assombrada por espíritos malignos.";
            var ator =  "Sam Rockwell, Rosemarie DeWitt, Jared Harris" ;
            var diretor =  "Gil Kenan" ;
            var nota = "71%";
            var genero = "Terror" ;
            var data = "2015";
            var foto =  '<img src="assets/img/7009.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto;
        }
        else if (sorteio==7) {
            var titulo ="A Casa de Cera " ;
            var descricao = "Amigos a caminho de um jogo de futebol americano viram presos de dois irmãos assassinos de uma pequena cidade abandonada.";
            var ator =  "Emma Lung, Elisha Cuthbert, Chad Michael Murray" ;
            var diretor = "Jaume Collet-Serra";
            var nota = "92%" ;
            var genero = "Terror" ;
            var data = "2005" ;
            var foto =  '<img src="assets/img/7005.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML = data
            document.getElementById("fotofilme").innerHTML = foto
        }
        else if (sorteio==8) {
            var titulo = "Livrai-nos do Mal" ;
            var descricao = "Durante a Segunda Guerra Mundial, um socorrista do exército se recusa a matar, mas consegue levar seu batalhão a Vitória reiniciar o movimento de objeção por consciência." ;
            var ator ="Eric Bana, Édgar Ramírez, Olivia Munn";
            var diretor = "Scott Derrickson";
            var nota = "89%";
            var genero = "Terror" ;
            var data ="2014"  ;
            var foto =  '<img src="assets/img/7004.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML = data
            document.getElementById("fotofilme").innerHTML = foto
        }
        else if (sorteio==9) {
            var titulo = "Hush - A Morte Ouve";
            var descricao = "A escritora Meddie prefere a solidão e é surda. Quando um homem mascarado surge em sua janela, serão desvantagens a superar em tempo recorde. Ou não?.";
            var ator = "Kate Siegel, John Gallagher Jr., Michael Trucco";
            var diretor = "Mike Flanagan";
            var nota =  "87%";
            var genero = "Terror";
            var data =  "2016";
            var foto =  '<img src="assets/img/6003.gif" height="280" width="420" style="vertical-align: left;">';
            
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto

               
        }
        else if (sorteio==10) {
            var titulo = "Controle Absoluto" ;
            var descricao = "Um homem comum se encontra inexplicavelmente ligado a um famoso grupo terrorista e é perseguido freneticamente pelas autoridades.";
            var ator = "Shia LaBeouf, Michelle Monaghan, Rosario Dawson";
            var diretor = "D.J. Caruso";
            var nota = "96%";
            var genero = "Ação e Aventura " ;
            var data =  "2008";
            var foto = '<img src="assets/img/1009.gif" height="280" width="420" style="vertical-align: left;">';


            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML = data
            document.getElementById("fotofilme").innerHTML = foto
        }   
        else if (sorteio==11) {
            var titulo = "Esquadrão 6";
            var descricao = "Após forjar a própria morte, um bilionário monta uma equipe de profissionais internacionais para a ousada e sanguinária missão de derrubar um ditador cruel.";
            var ator = "Ryan Reynolds, Mélanie Laurent, Manuel Garcia-Rulfo";
            var diretor = "Michael Bay";
            var nota = "87%";
            var genero = "Ação e Aventura " ;
            var data = "2019" ;
            var foto = '<img src="assets/img/1011.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML = data
            document.getElementById("fotofilme").innerHTML = foto
        }
        else if (sorteio==12) {
            var titulo = "A Origem";
            var descricao = "Neste inusitado suspense de ficção científica, um homem cria serviço de espionagem que entra no subconsiente de seus alvos para moldar seus pensamentos.";
            var ator = "Leonardo DiCaprio, Marion Cotillard, Ellen Page";
            var diretor = "Christopher Nolan";
            var nota = "91%";
            var genero = "Ação e Aventura ";
            var data =  "2010";
            var foto = '<img src="assets/img/1017.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto
        }
        else if (sorteio==13) {
            var titulo = "O Profissional";
            var descricao = "Um assassino profissional de Nova Iorque se torna o Guardião de uma garota de 12 anos que quer se vingar do policial que assassinou toda sua família.";
            var ator = "Jean Reno, Gary Oldman, Natalie Portman";
            var diretor = "Luc Besson";
            var nota = "93%";
            var genero = "Ação e Aventura ";
            var data =  "1994";
            var foto = '<img src="assets/img/1020.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto
        }
        else if (sorteio==14) {
            var titulo = "Terremoto: A Falha de San Andreas" ;
            var descricao = "Após um terremoto devastar a Califórnia, um piloto de helicóptero e sua futura ex-mulher precisam salvar sua filha antes que a situação piore.";
            var ator = "Dwayne Johnson, Carla Gugino, Alexandra Daddario";
            var diretor = "Brad Peyton";
            var nota ="92%" ;
            var genero = "Ação e Aventura ";
            var data =  "2015";
            var foto = '<img src="assets/img/1014.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML = data
            document.getElementById("fotofilme").innerHTML = foto
        }
        else if (sorteio==15) {
            var titulo ="Monty Python - Em Busca do Cálice Sagrado" ;
            var descricao = "O grupo de comédia Monty PYthon reconta a lenda do Rei Arthur e os Cavaleiros da Távola Redonda na busca pelo Cálice Sagrado .";
            var ator = "Graham Chapman, John Cleese, Eric Idle";
            var diretor = "Terry Jones, Terry Gilliam" ;
            var nota =   "93%" ;
            var genero = "Comédia ";
            var data =   "1975";
            var foto =  '<img src="assets/img/2002.gif" height="280" width="420" style="vertical-align: left;">';

            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto
        }
        else if (sorteio==16) {
            var titulo ="Megarromântico" ;
            var descricao = "Após bater a cabeça, um arquiteta com horror as sentimentalidades vê sua vida se transformar em uma comédia romântica cafona e cheia de clichês.";
            var ator = "Rebel Wilson, Liam Hemsworth, Adam DeVine"  ;
            var diretor = "Todd Strauss-Schulson"  ;
            var nota = "84%"  ;
            var genero = "Comédia  " ;
            var data = "2019" ;
            var foto =  '<img src="assets/img/2005.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML = data
            document.getElementById("fotofilme").innerHTML = foto
        }
        else if (sorteio==17) {
            var titulo = "Click" ;
            var descricao = "O sobrecarregado Michel  Newman recebe um controle remoto Universal que lhe dá o poder de pausar o acelerar momentos de sua vida.";
            var ator = "Adam Sandler, Kate Beckinsale, David Hasselhoff";
            var diretor = "Frank Coraci";
            var nota ="84%" ;
            var genero = "Comédia ";
            var data =  "2006";
            var foto =  '<img src="assets/img/2013.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML = data
            document.getElementById("fotofilme").innerHTML = foto
        }
        else if (sorteio==18) {
            var titulo = "Um Senhor Estagiário";
            var descricao = "Estressada com o mundo da moda, a empresária Jules recebe ajuda inspiração de quem menos esperava: Ben, um estagiário viúvo e septuagenário.";
            var ator = "Robert De Niro, Anne Hathaway, Rene Russo";
            var diretor = "Nancy Meyers";
            var nota = "94%" ;
            var genero = "Comédia ";
            var data =  "2015";
            var foto =  '<img src="assets/img/2017.gif" height="280" width="420" style="vertical-align: left;">';

            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto
        }
        else if (sorteio==19) {
            var titulo = "O Plano Imperfeito";
            var descricao = "Desesperados por um pouco de sossego, dois assistentes exaustos unem forças para fazer com que seus chefes  workaholics se apaixonem.";
            var ator = "Zoey Deutch, Glen Powell, Lucy Liu";
            var diretor = "Claire Scanlon";
            var nota = "93%";
            var genero = "Comédia ";
            var data =  "2018";
            var foto =  '<img src="assets/img/2018.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto
        }
        else if (sorteio==20) {
            var titulo = "Á Espera de um Milagre";
            var descricao = "Um agente penitenciário descobre que um detento no corredor da morte possui poderes misteriosos. Agora,  ele precisa impedir a execução do condenado ao todo custo.";
            var ator ="Tom Hanks, Michael Clarke Duncan, David Morse" ;
            var diretor = "Frank Darabont";
            var nota =  "95%";
            var genero = "Drama" ;
            var data = "1999" ;
            var foto =  '<img src="assets/img/3020.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto;
        }
        else if (sorteio==21) {
            var titulo = "O Menino que Descobriu o Vento";
            var descricao = "Inspirado por um livro de ciências, um garoto constrói uma turbina eólica para salvar seu vilarejo da fome. Baseado em uma história real.";
            var ator ="Maxwell Simba, Chiwetel Ejiofor, Aïssa Maïga";
            var diretor = "Chiwetel Ejiofor";
            var nota = "93%";
            var genero = "Drama";
            var data =  "2019";
            var foto =  '<img src="assets/img/3019.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto;
        }
        else if (sorteio==22) {
            var titulo =  "Corações de Ferro";
            var descricao = "Um recruta vivencia os horrores da guerra ao lado de um agrupamento de veteranos norte-americanos durante os últimos momentos da Segunda Guerra Mundial.";
            var ator = "Brad Pitt, Shia LaBeouf, Logan Lerman" ;
            var diretor = "David Ayer";
            var nota = "94%";
            var genero = "Drama";
            var data =  "2014";
            var foto =  '<img src="assets/img/3014.gif" height="280" width="420" style="vertical-align: left;">'; 
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto;
        }
        else if (sorteio==23) {
            var titulo = "Viver Duas Vezes" ;
            var descricao = "Quando é diagnosticado Emilio (Oscar Martínez) com Alzheimer, ele sua família resolvem partir em busca o seu amor de infância.";
            var ator =  "Oscar Martinez, Inma Cuesta, Aina Clotet";
            var diretor = "Maria Ripoll";
            var nota = "95%";
            var genero = "Drama" ;
            var data =  "2019";
            var foto =  '<img src="assets/img/3008.gif" height="280" width="420" style="vertical-align: left;">'; 


            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML = data
            document.getElementById("fotofilme").innerHTML = foto;
        }   
        else if (sorteio==24) {
            var titulo = "Como Estrelas na Terra";
            var descricao = "Quando o sonhador Ishaan vai parar num internato, um professor de artes tenta ajudar o jovem criativo descobrir sua verdadeira identidade.";
            var ator = "Aamir Khan, Darsheel Safary, Tisca Chopra";
            var diretor ="Aamir Khan, Amole Gupte";
            var nota = "96%" ;
            var genero = "Drama";
            var data = "2007" ;
            var foto =  '<img src="assets/img/3003.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto
        }
        else if (sorteio==25) {
            var titulo = "Bright"  ;
            var descricao = "Em um mundo habitado por diferentes espécies, um policial humano e seu parceiro orc encontram um artefato que os coloca no centro de uma profética guerra por território." ;
            var ator = "Will Smith, Joel Edgerton, Noomi Rapace" ;
            var diretor = "David Ayer";
            var nota =  "91%" ;
            var genero = "Ficção Cientifíca " ;
            var data =  "2017"  ;
            var foto =  '<img src="assets/img/1003.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML = data
            document.getElementById("fotofilme").innerHTML = foto
        }
        else if (sorteio==26) {
            var titulo = "Black Mirror: Bandersnatch";
            var descricao = "Em 1984, um jovem programador começa a adaptar um romance fantástico para videogame e põe em questão a própria realidade. Uma história alucinante com múltiploss finais.";
            var ator ="Fionn Whitehead, Will Poulter, Asim Chaundhry" ;
            var diretor = "David Slade";
            var nota = "85%";
            var genero = "Ficção Cientifíca " ;
            var data = "2018" ;
            var foto =  '<img src="assets/img/4007.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto
        }
        else if (sorteio==27) {
            var titulo = "Sem Limites";
            var descricao = "Um zé ninguém ganha superpoderes mentais ao tomar a pílula secreta NZT.E entra no radar do FBI quando se torna suspeito de um assassinato.";
            var ator = "Bradley Cooper, Robert De Niro, Abbie Cornish";
            var diretor = "Neil Burger" ;
            var nota = "91%";
            var genero = "ficcao cientifica" ;
            var data = "2011";
            var foto =  '<img src="assets/img/4009.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto
        }
        else if (sorteio==28) {
            var titulo = "O Vingador do Futuro";
            var descricao = "Recheada de cenas de ação, esta refilmagem do clássico de ficção científica dos anos 1990 acompanha a saga futurista de um homem após passar por um implante de memória.";
            var ator = "Colin Farrell, Kate Beckinsale, Jessica Biel";
            var diretor = "Len Wiseman";
            var nota =  "81%";
            var genero = "Ficção Cientifíca " ;
            var data = "2012" ;
            var foto =  '<img src="assets/img/4010.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML = data
            document.getElementById("fotofilme").innerHTML = foto
        }
        else if (sorteio==29) {
            var titulo =  "A Chegada";
            var descricao = "Uma linguista encarregada de encontrar uma forma de se comunicar com aliens que chegaram á Terra descobre uma conexão que pode mudar a sua vida e a do mundo.";
            var ator = "Amy Adams, Jeremy Renner, Forest Whitaker" ;
            var diretor =  "Denis Villeneuve" ;
            var nota = "89%";
            var genero = "Ficção Cientifíca ";
            var data =  "2016";
            var foto =  '<img src="assets/img/4014.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto
        }
        else if (sorteio==30) {
            var titulo ="Batalhas";
            var descricao =  "Com a falência do pai, a jovem bailarina Amalie vê seu estilo de vida luxuoso desmoronar.Mas ela descobre um novo ritmo ao conhecer o dançarino de hip-hop Mikael.";
            var ator = "Lisa Teige, Bao Andre Nguyen, Charlott Utzig";
            var diretor ="Katarina Launing"  ;
            var nota ="91%";
            var genero = "Romance";
            var data ="2018" ;
            var foto =  '<img src="assets/img/5005.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML = data
            document.getElementById("fotofilme").innerHTML = foto
        }
        else if (sorteio==31) {
            var titulo = "10 Coisas Que Eu Odeio Em Você";
            var descricao = "Um pretendente de Bianca contrata um colegial rebelde para cortejar sua irmã quando fica sabe que Bianca não pode namorar enquanto a irmã, que odeia homens, não tiver um namorado.";
            var ator ="Heath Ledger, Julia Stiles, Joseph Gordon-Levitt" ;
            var diretor = "Gil Junger";
            var nota = "95%";
            var genero = "Romance ";
            var data = "1999";
            var foto =  '<img src="assets/img/5007.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto
        }
        else if (sorteio==32) {
            var titulo = "A Sociedade Literária e a Torta de Casca de Batata" ;
            var descricao = "Ao pesquisar sobre um grupo de leitura criado em Guernsey durante a ocupação alemã na Segunda Guerra, uma escritora se envolve com os excêntricos fundadores do clube.";
            var ator =  "Lily James, Michiel Huisman, Matthew Goode";
            var diretor =  "Mike Newell";
            var nota = "95%";
            var genero = "Romance";
            var data =  "2018";
            var foto =  '<img src="assets/img/5008.gif" height="280" width="420" style="vertical-align: left;">';


            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML = data
            document.getElementById("fotofilme").innerHTML = foto
        }   
        else if (sorteio==33) {
            var titulo ="A Proposta";
            var descricao = "Quando fica sabendo que está correndo o risco de perder seu visto e ser deportada, uma editora força seu assistente a casar-se com ela.";
            var ator = "Sandra Bullock, Ryan Reynolds, Betty White";
            var diretor ="Anne Fletcher" ;
            var nota ="94%" ;
            var genero = "Romance ";
            var data =  "2009";
            var foto =  '<img src="assets/img/5011.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML = data
            document.getElementById("fotofilme").innerHTML = foto
        }   
        else if (sorteio==34) {
            var titulo = "Hoje Eu Quero Voltar Sozinho" ;
            var descricao = "Um novo colega de sala transforma a vida do estudante leonardo, que também é cego, e complica sua amizade com sua melhor amiga.";
            var ator = "Ghilherme Lobo, Fabio Audi, Tess Amorim";
            var diretor = "Daniel Ribeiro";
            var nota ="95%" ;
            var genero = "Romance ";
            var data =  "2014";
            var foto =  '<img src="assets/img/5013.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML = data
            document.getElementById("fotofilme").innerHTML = foto
        }
        else {
            var titulo = "Alerta Lobo";
            var descricao = "A guerra Nuclear é iminente. Para evitá-la, o militar especialista em acústica tenta provar que as coisas não são o que parecem-usando apenas os ouvidos.";
            var ator = "François Civil, Omar Sy, Mathieu Kassovitz";
            var diretor ="Antonin Baudry";
            var nota =  "92%";
            var genero = "Suspence";
            var data =  "2019";
            var foto =  '<img src="assets/img/6021.gif" height="280" width="420" style="vertical-align: left;">';
           
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto;
            
       
        }
    }
