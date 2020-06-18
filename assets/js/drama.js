
//função do sorteio   
    function sorteiodrama(){ 
    //var sorteio=2
        //Jogada do sorteio
        var sorteio = 1 + Math.floor(Math.random()*21)
        
        //ver qual filme foi sorteado
        if (sorteio==1) {
            var titulo = "Apollo 13";
            var descricao = "Problemas técnicos colocam em risco a missão Apollo 13 em 1971, além de da vida do astronauta Jim Lovell e de sua tripulação, nessa história baseada em fatos reais.";
            var ator = "Tom Hanks, Bill Paxton, Gary Sinise";
            var diretor = "Ron Howard";
            var nota =  "91%";
            var genero = "Drama";
            var data =  "1995";
            var foto =  '<img src="assets/img/3001.gif" height="280" width="420" style="vertical-align: left;">';
            
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
            var titulo = "Milagre na Cela 7";
            var descricao = "Separado de sua filha, um homem com deficiência intelectual precisa provar sua inocência ao ser preso pela morte da filha de um comandante.";
            var ator = "Aras Bulut İynemli, Nisa Sofiya Aksongur, Deniz Baysal";
            var diretor = "Mehmet Ada Öztekin";
            var nota =  "96%";
            var genero = "Drama";
            var data =  "2019";
            var foto =  '<img src="assets/img/3002.gif" height="280" width="420" style="vertical-align: left;">';

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

        else if (sorteio==4) {
            var titulo = "Até o Último Homem" ;
            var descricao = "Durante a Segunda Guerra Mundial, um socorrista do exército se recusa a matar, mas consegue levar seu batalhão a Vitória reiniciar o movimento de objeção por consciência." ;
            var ator = "Andrew Garfield, Vince Vaughn, Teresa Palmer";
            var diretor = "Mel Gibson";
            var nota = "96%" ;
            var genero = "Drama" ;
            var data ="2016"  ;
            var foto =  '<img src="assets/img/3004.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo ="Lion - Uma jornada para Casa" ;
            var descricao = "Um garoto se perde é adotado por um casal australiano. Anos depois, ele continua decidido a rever a sua família.";
            var ator = "Dev Patel, Rooney Mara, Nicole Kidman" ;
            var diretor = "Garth Davis" ;
            var nota = "93%" ;
            var genero = "Drama" ;
            var data = "2016" ;
            var foto =  '<img src="assets/img/3004.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "À Procura da Felicidade" ;
            var descricao = "Um determinado pai solteiro luta para construir uma vida melhor para a sua família descobrir o verdadeiro sentido da felicidade.";
            var ator = "Will Smith, Thandie Newton, Jaden Smith";
            var diretor = "Gabriele Muccino";
            var nota = "95%";            ;
            var genero = "Drama";
            var data = "2006" ;
            var foto =  '<img src="assets/img/3006.gif" height="280" width="420" style="vertical-align: left;">';

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
            var titulo = "Por Lugares Incríveis";
            var descricao = "Dois adolescentes que estão passando por momentos difíceis cria um forte laço quando embarcam em uma jornada transformadora para visitar as maravilhas de Indiana.";
            var ator ="Elle Fanning, Justice Smith, Keegan-Michael Key" ;
            var diretor = "Brett Haley" ;
            var nota = "91%";
            var genero = "Drama " ;
            var data = "2020";
            var foto =  '<img src="assets/img/3007.gif" height="280" width="420" style="vertical-align: left;">';
          
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

        else if (sorteio==9) {
            var titulo = "História de um Casamento";
            var descricao = "Um olhar sensível sobre um casamento que termina e uma família que permanece unida. Do diretor Noah Baumbach, indicado ao Oscar.";
            var ator =  "Adam Driver, Scarlett Johansson, Laura Dern" ;
            var diretor = "Noah Baumbach" ;
            var nota = "88%";
            var genero = "Drama" ;
            var data = "2019";
            var foto =  '<img src="assets/img/3009.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto;
        }
        else if (sorteio==10) {
            var titulo = "Como Eu Era Antes de Você";
            var descricao ="O coração da ingênua Lou é posto à prova quando ela passa a cuidar de um solteiro rico e ranzinza,  que ficou tetraplégico em um acidente.";
            var ator = "Emilia Clarke, Sam Claflin, Janet McTeer";
            var diretor = "Thea Sharrock";
            var nota = "95%";
            var genero = "Drama" ;
            var data = "2016" ;
            var foto =  '<img src="assets/img/3010.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML = data
            document.getElementById("fotofilme").innerHTML = foto;
        }

        else if (sorteio==11) {
            var titulo = "Mulheres do Século 20";
            var descricao = "Em 1979, a boêmia  Dorothea pede ajuda a duas jovens para interagir com seu filho adolescente e ajudá-lo a se tornar um homem.";
            var ator = "Annette Bening, Greta Gerwig, Elle Fanning";
            var diretor ="Mike Mills" ;
            var nota ="90%" ;
            var genero = "Drama";
            var data =  "2016";
            var foto =  '<img src="assets/img/3011.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML = data
            document.getElementById("fotofilme").innerHTML = foto;
        }   
        
        else if (sorteio==12) {
            var titulo = "O Minimo para Viver";
            var descricao = "Uma jovem de 20 anos sofrendo de anorexia embarca em uma emocionante jornada de auto descoberta em um grupo liderado por um médico pouco convencional.";
            var ator = "Lily Collins, Keanu Reeves, Carrie Preston";
            var diretor = "Marti Noxon";
            var nota = "93%" ;
            var genero = "Drama";
            var data =  "2017";
            var foto =  '<img src="assets/img/3012.gif" height="280" width="420" style="vertical-align: left;">';

            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML = data
            document.getElementById("fotofilme").innerHTML = foto;
        }

        else if (sorteio==13) {
            var titulo = "1922" ;
            var descricao ="Um fazendeiro confessa assassinato da sua esposa. E esse é só o começo desta trama macabra baseada num livro de Stephen King.";
            var ator = "Thomas Jane, Molly Parker, Dylan Schmid";
            var diretor = "Zak Hilditch";
            var nota ="80%" ;
            var genero = "Drama";
            var data = "2017";
            var foto =  '<img src="assets/img/3013.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML = data
            document.getElementById("fotofilme").innerHTML = foto;
        }
        else if (sorteio==14) {
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
        else if (sorteio==15) {
            var titulo = "Dumplin'";
            var descricao = "Determinada a desafiar os padrões impostos pela sociedade, a adolescente Willowdean Dickson se inscreve no concurso de beleza organizado por sua mãe, uma ex-miss.";
            var ator = "Jennifer Aniston, Danielle Macdonald, Harold Perrineau";
            var diretor = "Anne Fletcher";
            var nota = "92%";
            var genero = "Drama";
            var data = "2018" ;
            var foto =  '<img src="assets/img/3015.gif" height="280" width="420" style="vertical-align: left;">'; 
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto;
        }
        else if (sorteio==16) {
            var titulo = "O Melhor de Mim";
            var descricao = "Eles se adoravam no colégio e voltam a se encontrar no enterro. Apenas memórias dolorosas impedem a volta de um grande amor.";
            var ator = "Michelle Monaghan, James Marsden, Liana Liberato";
            var diretor = "Michael Hoffman";
            var nota = "91%";
            var genero = "Drama";
            var data =  "2014";
            var foto =  '<img src="assets/img/3016.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto;
        }

        else if (sorteio==17) {
            var titulo = "A Teoria de Tudo";
            var descricao = "Essa cinebiografia do astrofísico Stephen Hawking retrata a importância de seu trabalho, a luta contra uma doença incurável e o amor incondicional de sua esposa.";
            var ator = "Eddie Redmayne, Felicity Jones, Tom Prior" ;
            var diretor = "James Marsh";
            var nota = "90%" ;
            var genero = "Drama";
            var data =   "2014";
            var foto =  '<img src="assets/img/3017.gif" height="280" width="420" style="vertical-align: left;">';

            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto;
        }
        else if (sorteio==18) {
            var titulo = "O Regresso";
            var descricao = "Nos anos 1820, um caçador de peles luta pela sobrevivência para se vingar de um o mercenário cruel que deixou à beira da morte próximo ao Rio Missouri.";
            var ator = "Leonardo DiCaprio, Tom Hardy, Domhnall Gleeson";
            var diretor = "Alejandro González Iñárritu";
            var nota = "90%";
            var genero = "Drama";
            var data =  "2016";
            var foto =  '<img src="assets/img/3018.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto;
        }
        else if (sorteio==19) {
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
        else {
            var titulo = "O Vendedor de Sonhos";
            var descricao = "Um psicólogo desiludido com a vida tenta cometer o suicídio, mas alguém inesperado parece com ensinamentos valiosos para compartilhar.";
            var ator = "Dan Stulbach, César Troncoso, Thiago Mendonça";
            var diretor = "Jayme Monjardim";
            var nota =  "93%";
            var genero = "Drama";
            var data =  "2016";
            var foto =  '<img src="assets/img/3021.gif" height="280" width="420" style="vertical-align: left;">';
           
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
