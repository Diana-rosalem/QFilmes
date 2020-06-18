
//função do sorteio   
    function sorteioacao(){ 
    //var sorteio=2
        //Jogada do sorteio
        var sorteio = 1 + Math.floor(Math.random()*21)
        
        //ver qual filme foi sorteado
        if (sorteio==1) {
            var titulo = "Onde Está Segunda?";
            var descricao = "Em um futuro onde só filhos únicos são permitidos,seis irmãs gêmeas tentam se esconder do governo enquanto procuram a sétima desaparecida.";
            var ator = "Noomi Rapace, Willem Dafoe, Glenn Close";
            var diretor = "Tommy Wirkola";
            var nota =  "92%";
            var genero = "Ação e Aventura ";
            var data =  "2017"
            var foto = '<img src="assets/img/1001.gif" height="280" width="420" style="vertical-align leftimg-fluid d-flex justify-content-center align-items-center align-content-center align-self-center";">';
            
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
            var titulo = "Shaft";
            var descricao = "Quando o filho que ele não conhecia aparece pedindo ajuda, o detetive velha-guarda John Shaft descobre que filho de peixe nem sempre peixinho é.";
            var ator = "Samuel L. Jackson, Jessie T. Usher, Regina Hall";
            var diretor = "Tim Story";
            var nota =  "91%";
            var genero = "Ação e Aventura ";
            var data =  "2019";
            var foto = '<img src="assets/img/1002.gif" height="280" width="420" style="vertical-align: left;">';
            
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
            var titulo = "Operações Especiais";
            var descricao = "Em uma área dominada peli crime no Rio de Janeiro, uma equipe de policiais honestos luta contra a corrupção e a desconfiança vindas de todos os lados.";
            var ator = "Cléo Pires, Fabrício Boliveira, Thiago Martins";
            var diretor ="Tomas Portella" ;
            var nota ="92%" ;
            var genero = "Ação e Aventura ";
            var data = "2015" ;
            var foto = '<img src="assets/img/1004.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "Blade Runner: O Caçador de Androides " ;
            var descricao = "Em uma Los Angeles poluída e distópica, o caçador de androides Rick Deckard volta á ativa para detes um quarteto fugitivo de replicantes." ;
            var ator = "Harrison Ford, Rutger Hauer, Sean Young ";
            var diretor = "Ridley Scott";
            var nota = "85%" ;
            var genero = "Ação e Aventura " ;
            var data ="1982"  ;
            var foto = "1005.gif"
            var foto = '<img src="assets/img/1005.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo ="O Atirador: O Extermínio Final" ;
            var descricao = "Um chefão de tráfico colombiano assume o controle das rotas para os EUA. Agora, cabe a um atirador de elite e a um policial a missão de acabar com ele e seu cartel.";
            var ator = "Chad Michael Collins, Billy Zane, Tom Berenger" ;
            var diretor = "Claudio Fäh" ;
            var nota = "82%" ;
            var genero = "Ação e Aventura " ;
            var data = "2017" ;
            var foto = '<img src="assets/img/1006.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "S.W.A.T - Operação Escorpião" ;
            var descricao = "Com um misterioso prisioneiro sob custódia, a S.W.A.T é alvo de ataque de criminosos dispostos a libertá-lo a qualquer custo.";
            var ator = "Sam Jaeger, Michael Jai White, Adrianne Palicki";
            var diretor = "Tony Giglio";
            var nota = "75%";            ;
            var genero = "Ação e Aventura ";
            var data = "2017" ;
            var foto = '<img src="assets/img/1007.gif" height="280" width="420" style="vertical-align: left;">';

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
            var titulo = "Guerra Mundial Z";
            var descricao = "Um ex-funcionário da ONU corre contra o tempo e desafia o destino, viajando ao redor do mundo tentando impedir que uma pandemia zumbi se espalhe.";
            var ator ="Brad Pitt, Mireille Enos, Daniella Kertesz" ;
            var diretor = "Marc Forster" ;
            var nota = "93%";
            var genero = "Ação e Aventura " ;
            var data = "2013" ;
            var foto = '<img src="assets/img/1008.gif" height="280" width="420" style="vertical-align: left;">';
          
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

        else if (sorteio==9) {
            var titulo = "Troco em Dobro";
            var descricao = "Spenser, um ex-policials e ex-presidiário, e o aspirante a lutador Hawk se unem para investigar uma conspiração ligada á morte de dois oficiais de Boston.";
            var ator = "Winston Duke, Mark Wahlberg, Alan Arkin" ;
            var diretor = "Peter Berg" ;
            var nota = "88%";
            var genero = "Ação e Aventura " ;
            var data = "2020" ;
            var foto = '<img src="assets/img/1010.gif" height="280" width="420" style="vertical-align: left;">';
          
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

        else if (sorteio==11) {
            var titulo = "Horizonte Profundo";
            var descricao = "Esta dramatização da catástrofe de 2010 na plataforma de petróleo Deepwater Horizon retrata as 12 horas que precederam o desastre e o heroísmo que salvou vidas.";
            var ator = "Mark Wahlberg, Dylan O'Brien, Kate Hudson";
            var diretor ="Peter Berg" ;
            var nota ="91%" ;
            var genero = "Ação e Aventura ";
            var data =  "2016";
            var foto = '<img src="assets/img/1012.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "Crimes na Madrugada";
            var descricao = "Um policial tenta roubar o carregamento de drogas de um chefão do submundo dos cassinos mas o plano não dá certo e seu filho é sequestrado.";
            var ator = "David Harbour, T.I., Jamie Fox" ;
            var diretor = "Baran bo Odar";
            var nota = "78%" ;
            var genero = "Ação e Aventura ";
            var data =  "2017";
            var foto = '<img src="assets/img/1013.gif" height="280" width="420" style="vertical-align: left;">';

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
        else if (sorteio==14) {
            var titulo =  "Eu Sou o Número Quatro";
            var descricao = "Nove alienígenas fogem de seu planeta em busca de paz na Terra, mas o sonho vira pesadelo quando começam a ser perseguidos e mortos em ordem numérica.";
            var ator = "Alex Pettyfer, Timothy Olyphant, Teresa Palmer" ;
            var diretor = "D.J. Caruso" ;
            var nota = "91%";
            var genero = "Ação e Aventura ";
            var data =  "2011";
            var foto = '<img src="assets/img/1015.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "Perda Total";
            var descricao = "Com seu sofisticado hotel tomado por terroristas, três amigos passam de sonhadores sem futuro a implacáveis guerreiros determinados a salvar o dia.";
            var ator = "Adam DeVine, Anders Holm, Blake Anderson" ;
            var diretor = "Kyle Newacheck";
            var nota = "79%";
            var genero = "Ação e Aventura ";
            var data = "2018" ;
            var foto = '<img src="assets/img/1016.gif" height="280" width="420" style="vertical-align: left;">';
          
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

        else if (sorteio==17) {
            var titulo = "Resgate";
            var descricao = "Em Bangladesh, o mercenário Tyler Rake luta para sobreviver durante a missão para resgatar o filho deu um chefão do crime.";
            var ator = "David Harbour, Chris Hemsworth";
            var diretor ="Sam hargrave" ;
            var nota = "90%" ;
            var genero = "Ação e Aventura ";
            var data =  "2020";
            var foto = '<img src="assets/img/1018.gif" height="280" width="420" style="vertical-align: left;">';

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
            var titulo = "Code 8 - Renegados";
            var descricao = "Em uma cidade em que pessoas com superpoderes são marginalizados, um homem usa suas habilidades especiais para salvar sua mãe doente.";
            var ator = "Stephen Amell, Robbie Amell, Laysla De Oliveira";
            var diretor = "Jeff Chan";
            var nota = "87%";
            var genero = "Ação e Aventura ";
            var data =  "2019";
            var foto = '<img src="assets/img/1019.gif" height="280" width="420" style="vertical-align: left;">';
          
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
        else if (sorteio==20) {
            var titulo = "A Hora mais Escura";
            var descricao = "Kathryn Bigelow Dirige essa dramatização que retrata a busca por Osama Bin Laden desde os ataques terroristas de 11 de setembro .";
            var ator ="Jessica Chastain, Jason Clarke, Joel Edgerton" ;
            var diretor = "Kathryn Bigelow";
            var nota =  "88%";
            var genero = "Ação e Aventura " ;
            var data = "2012" ;
            var foto = '<img src="assets/img/1021.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "Bright";
            var descricao = "Em um mundo habitado por diferentes espécies, um policial humano e seu parceiro orc encontram um artefato que os coloca no centro de uma profética guerra por território..";
            var ator = "Will Smith, Joel Edgerton, Noomi Rapace";
            var diretor = "David Ayer";
            var nota =  "91%";
            var genero = "Ação e Aventura ";
            var data =  "2017";
            var foto = '<img src="assets/img/1003.gif" height="280" width="420" style="vertical-align: left;">';
           
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