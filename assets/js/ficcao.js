
//função do sorteio   
    function sorteioficcao(){ 
    //var sorteio=2
        //Jogada do sorteio
        var sorteio = 1 + Math.floor(Math.random()*21)
        
        //ver qual filme foi sorteado
        if (sorteio==1) {
            var titulo = "A Origem";
            var descricao ="Neste inusitado suspense de ficção científica, um homem cria serviço de espionagem que entra no subconsiente de seus alvos para moldar seus pensamentos." ;
            var ator = "Leonardo DiCaprio, Marion Cotillard, Ellen Page" ;
            var diretor = "Christopher Nolan";
            var nota =  "91%";
            var genero = "Ficção Cientifíca ";
            var data =   "2010";
            var foto =  '<img src="assets/img/1017.gif" height="280" width="420" style="vertical-align: left;">';
            
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
            var titulo ="Code 8 - Renegados" ;
            var descricao = "Em uma cidade em que pessoas com superpoderes são marginalizados, um homem usa suas habilidades especiais para salvar sua mãe doente.";
            var ator = "Stephen Amell, Robbie Amell, Laysla De Oliveira";
            var diretor = "Jeff Chan" ;
            var nota =   "87%" ;
            var genero = "Ficção Cientifíca ";
            var data =   "2019";
            var foto =  '<img src="assets/img/1019.gif" height="280" width="420" style="vertical-align: left;">';

            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto
        }

        else if (sorteio==3) {
            var titulo = "Eu Sou o Número Quatro";
            var descricao = "Nove alienígenas fogem de seu planeta em busca de paz na Terra, mas o sonho vira pesadelo quando começam a ser perseguidos e mortos em ordem numérica.";
            var ator = "Alex Pettyfer, Timothy Olyphant, Teresa Palmer";
            var diretor ="D.J. Caruso";
            var nota ="91%" ;
            var genero = "Ficção Cientifíca ";
            var data = "2011" ;
            var foto =  '<img src="assets/img/1015.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto
        }

        else if (sorteio==4) {
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
        else if (sorteio==5) {
            var titulo ="Circle";
            var descricao =  "Um grupo de 50 estranhos está aguardando a execução e recebe a difícill tarefa de escolher uma única pessoa dentre eles para escapar desse destino.";
            var ator = "Allegra Masters, Aimee McKay, Ashley Key " ;
            var diretor ="Aaron Hann, Mario Miscione"  ;
            var nota ="72%" ;
            var genero = "Ficção Cientifíca "
            var data ="2015" ;
            var foto =  '<img src="assets/img/4005.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML = data
            document.getElementById("fotofilme").innerHTML = foto
        }

        else if (sorteio==6) {
            var titulo = "Bird Box" ;
            var descricao = "Uma misteriosa presença leva as pessoas ao suicídio. Cinco anos depois, uma sobrevivente e seus dois filhos saem em busac de um abrigo seguro." ;
            var ator =  "Sandra Bullock,Trevante Rhodes,Jacki Weaver";
            var diretor = "Susanne Bier" ;
            var nota = "87%" ;            ;
            var genero = "Ficção Cientifíca ";
            var data = "2018" ;
            var foto =  '<img src="assets/img/4006.gif" height="280" width="420" style="vertical-align: left;">'; 

            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto
        }

        else if (sorteio==7) {
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

        else if (sorteio==8) {
            var titulo = "Anon" ;
            var descricao = "Em um futuro em que a tecnologia tornou a privacidade uma ideia obsoleta, um detetive investiga um serial killer que foi deletado de todas as imagens em arquivo.";
            var ator =  "Doug Murray, Clive Owen, Amanda Seyfried";
            var diretor =  "Andrew Niccol";
            var nota = "78%";
            var genero = "Ficção Cientifíca "
            var data =  "2018";
            var foto =  '<img src="assets/img/4008.gif" height="280" width="420" style="vertical-align: left;">';


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
        else if (sorteio==10) {
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

        else if (sorteio==11) {
            var titulo = "Lucy";
            var descricao = "Quando uma jovem americana em Taiwané forçada a servir de mula, uma droga de alta tecnologia se espalha pelo seu corpo e a transforma em uma poderosa super-humana.";
            var ator = "Scarlett Johansson, Morgan Freeman, Min-sik Choi";
            var diretor ="Luc Besson" ;
            var nota ="90%" ;
            var genero = "Ficção Cientifíca ";
            var data =  "2014";
            var foto =  '<img src="assets/img/4011.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "Aniquilação";
            var descricao = "Depois que seu marido desaparece em uma missão secreta, a bióloga lena embarca numa expedição a um misteriosa região interditada pelo governo dos EUA.";
            var ator = "Natalie Portman, Jennifer Jason Leigh, Gina Rodriguez" ;
            var diretor = "Alex Garland";
            var nota = "76%";
            var genero = "Ficção Cientifíca ";
            var data =   "2018";
            var foto =  '<img src="assets/img/4012.gif" height="280" width="420" style="vertical-align: left;">'; 

            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML = data
            document.getElementById("fotofilme").innerHTML = foto
        }

        else if (sorteio==13) {
            var titulo = "OtherLife" ;
            var descricao = "Após inventar uma droga que produz realidade virtuais quem mudam a percepção do tempo, Ren se desentende com seu parceiro sobre como usar sua poderosa criação.";
            var ator = "Jessica De Gouw, Thomas Cocquerel, Shalom Brune-Franklin";
            var diretor = "Ben C. Lucas";
            var nota ="83%" ;
            var genero = "Ficção Cientifíca ";
            var data =  "2017";
            var foto =  '<img src="assets/img/4013.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML = data
            document.getElementById("fotofilme").innerHTML = foto
        }
        else if (sorteio==14) {
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
        else if (sorteio==15) {
            var titulo =  "Guerra dos mundos";
            var descricao = "Um estivador divorciado é forçado a se tornar o pai protetor o que nunca foi  quando espaçonaves invadem a Terra.";
            var ator = "Paco León, Alexandra Jiménez, Rossy de Palma" ;
            var diretor = "Steven Spielberg";
            var nota = "88%";
            var genero = "Ficção Cientifíca ";
            var data ="2008";
            var foto =  '<img src="assets/img/4015.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "Kong a Ilha da Caveira";
            var descricao = "Uma equipe de militares cientistas parte em uma expedição para uma ilha inexplorada, sem a menor ideia da surpresa gigante que a aguarda.";
            var ator =  "Tom Hiddleston, Samuel L. Jackson, Brie Larson";
            var diretor = "Jordan Vogt-Roberts";
            var nota = "87%";
            var genero = "Ficção Cientifíca ";
            var data =  "2017";
            var foto =  '<img src="assets/img/4016.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto
        }

        else if (sorteio==17) {
            var titulo = "Gravidade";
            var descricao = "Depois que escombros destroem sua nave, uma engenheira biomédica e um Astronauta experiente se veem flutuando no espaço, sem conexão com a Terra.";
            var ator = "Sandra Bullock, George Clooney, Ed Harris";
            var diretor = "Alfonso Cuarón";
            var nota = "82%" ;
            var genero = "Ficção Cientifíca ";
            var data =  "2013";
            var foto =  '<img src="assets/img/4017.gif" height="280" width="420" style="vertical-align: left;">';

            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto
        }
        else if (sorteio==18) {
            var titulo = "O Enigma de Outro Mundo";
            var descricao = "Cientistas na Antártica são obrigados a abandonar sua pesquisa quando o helicóptero cai perto de sua base, trazendo o cão solitário para junto deles.";
            var ator = "Kurt Russell, T.K. Carter, Wilford Brimley";
            var diretor = "John Carpenter";
            var nota = "91%";
            var genero = "Ficção Cientifíca ";
            var data =  "1982";
            var foto =  '<img src="assets/img/4018.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "Contatos Imediatos do Terceiro Grau";
            var descricao =  "Enquanto eventos inexplicáveis chocam os especialistas, um homem obcecado por OVNIs é atraído para uma montanha misteriosa e tem um encontro de outro mundo.";
            var ator = "Richard Dreyfuss, François Truffaut, Teri Garr";
            var diretor = "Steven Spielberg";
            var nota = "89%";
            var genero = "Ficção Cientifíca ";
            var data =  "1977";
            var foto =  '<img src="assets/img/4019.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "Vida";
            var descricao ="A descoberta de um organismo unicelular numa amostra trazida de Marte deixa todos os entusiasmados... até que a criatura começa a dar sinais de inteligência.";
            var ator ="Daniel Espinosa" ;
            var diretor = "Greg Mottola";
            var nota =  "77%";
            var genero = "Ficção Cientifíca "
            var data = "2017" ;
            var foto =  '<img src="assets/img/4020.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto
        }
        else {
            var titulo = "Tau";
            var descricao = "Sequestrada por um inventor que a faz de cobaia para aprimorar um sistema de inteligência artificial robótica, uma jovem tenta fugir de seu cativeiro de alta tecnologia.";
            var ator = "Maika Monroe, Ed Skrein, Gary Oldman";
            var diretor = "Federico D'Alessandro";
            var nota =  "87%";
            var genero = "Ficção Cientifíca ";
            var data =  "2018";
            var foto =  '<img src="assets/img/4021.gif" height="280" width="420" style="vertical-align: left;">';
           
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto
            
       
        }
    }
