
//função do sorteio   
    function sorteiocomedia(){ 
    //var sorteio=2
        //Jogada do sorteio
        var sorteio = 1 + Math.floor(Math.random()*21)
        
        //ver qual filme foi sorteado
        if (sorteio==1) {
            var titulo = "Meu Nome é Dolemite" ;
            var descricao = "Los Angeles, anos 1970. Depois do sucesso do seu indecente alter ego, Dolemite, o comediante Rudy Ray Moore arrisca tudo para chegar às telonas." ;
            var ator = "Eddie Murphy, Wesley Snipes, Mike Epps" ;
            var diretor = "Craig Brewer";
            var nota =  "93%";
            var genero = "Comédia ";
            var data =   "2019";
            var foto =  '<img src="assets/img/2001.gif" height="280" width="420" style="vertical-align: left;">';
            
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
            var titulo ="Monty Python - Em Busca do Cálice Sagrado" ;
            var descricao = "O grupo de comédia Monty Python reconta a lenda do Rei Arthur e os Cavaleiros da Távola Redonda na busca pelo Cálice Sagrado.";
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

        else if (sorteio==3) {
            var titulo = "Meu Eterno Talvez";
            var descricao = "A famosa chefe Sascha e o músico Marcus se reencontram depois de 15 anos. Atração ainda existe, mas não vai ser fácil para que eles se adaptarem a vida um do outro.";
            var ator = "Ali Wong, Randall Park, Keanu Reeves";
            var diretor ="Nahnatchka Khan" ;
            var nota ="92%" ;
            var genero = "Comédia ";
            var data = "2019" ;
            var foto =  '<img src="assets/img/2003.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "Curtindo a Vida Adoidado"  ;
            var descricao = "Um adolescente convence todo o colégio que está à beira da morte, e então vai para Chicago curtir a vida com sua namorada e seu melhor amigo." ;
            var ator = "Matthew Broderick, Alan Ruck, Mia Sara" ;
            var diretor =  "John Hughes";
            var nota =  "94%" ;
            var genero = "Comédia " ;
            var data =  "1986"  ;
            var foto =  '<img src="assets/img/2004.gif" height="280" width="420" style="vertical-align: left;">';
          
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

        else if (sorteio==6) {
            var titulo = "Perfeita É a Mãe!"  ;
            var descricao = "Quando o peso da responsabilidade se torna insuportável, esta mãe solteira tenha solução: jogar tudo para o alto e sair em busca de diversão!." ;
            var ator =  " Mila Kunis, Kristen Bell, Kathryn Hahn";
            var diretor = "Jon Lucas, Scott Moore" ;
            var nota = "89%" ;            ;
            var genero = "Comédia ";
            var data = "2016" ;
            var foto =  '<img src="assets/img/2006.gif" height="280" width="420" style="vertical-align: left;">'; 

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
            var titulo = "A vida de Brian ";
            var descricao = "Nascido em um estábulo na Judeia, Brian entra para um grupo antirromano depois de crescer, mas sua vida está se saindo parecida demais com a de um certo carpinteiro.";
            var ator ="Graham Chapman, Terry Gilliam, John Cleese" ;
            var diretor = "Terry Jones" ;
            var nota = "91%";
            var genero = "Comédia " ;
            var data = "1979" ;
            var foto =  '<img src="assets/img/2007.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "Special Correspondents" ;
            var descricao = "Uma dupla de repórteres perde o passaporte inventa reportagens falsas de uma zona de combate que torna a situação cada vez mais complicada.";
            var ator = "Ricky Gervais, Eric Bana, Vera Farmiga ";
            var diretor = "Ricky Gervais";
            var nota = "82%";
            var genero = "Comédia  " ;
            var data =  "2016";
            var foto =  '<img src="assets/img/2008.gif" height="280" width="420" style="vertical-align: left;">';


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
            var titulo = "Isi & Ossi";
            var descricao = "Para convencer os pais a deixá-la realizar seu sonho de estudar culinária em Nova York, a filha de um bilionário finge estar namorando um boxeador pobre.";
            var ator = "Darcy Rose Byrnes, Dennis Mojen, Lisa Vicari, André Eisermann.";
            var diretor = "Oliver Kienle" ;
            var nota = "97%";
            var genero = "Comédia " ;
            var data = "2020" ;
            var foto =  '<img src="assets/img/2009.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "Grease";
            var descricao = "Neste musical que marcou época, John Travolta é líder de uma gangue que, para o desgosto dos colegas se apaixona por uma garota tudo certinho de vida por Olivia Newton-John.";
            var ator = "John Travolta, Olivia Newton-John, Stockard Channing";
            var diretor = "Randal Kleiser";
            var nota =  "91%";
            var genero = "Comédia " ;
            var data = "1978" ;
            var foto =  '<img src="assets/img/2010.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "O Segredo dos Animais";
            var descricao = "Quando as coisas na fazenda ficam agitados demais, um energético bovino chamado Otis entra em ação para colocar tudo em ordem.";
            var ator = "Emmanuel Garijo, Claude Brosset, Kevin James";
            var diretor ="Steve Oedekerk" ;
            var nota ="91%" ;
            var genero = "Comédia ";
            var data =  "2006";
            var foto =  '<img src="assets/img/2011.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "O clube dos 5";
            var descricao = "O atleta, o nerd, o marginal, princesa e a maluca rompe as barreiras sociais de um colégio durante o castigo de sábado.";
            var ator = "Emilio Estevez, Anthony Michael Hall, Paul Gleason" ;
            var diretor = "John Hughesz";
            var nota = "94%" ;
            var genero = "Comédia ";
            var data =  "1985";
            var foto =  '<img src="assets/img/2012.gif" height="280" width="420" style="vertical-align: left;">'; 

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
        else if (sorteio==14) {
            var titulo =  "Yucatán";
            var descricao = "Durante um cruzeiro entre a Espanha e o México, dois trapaceiros competem entre si, tentando enganar um padeiro que ganhou milhões na loteria.";
            var ator = "Luis Tosar, Rodrigo de la Serna, Gloria Muñoz" ;
            var diretor = "Daniel Monzón" ;
            var nota = "75%";
            var genero = "Comédia ";
            var data =  "2018";
            var foto =  '<img src="assets/img/2014.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "Toc Toc";
            var descricao = "A sala de espera do médico atrasado, pacientes com TOC precisam lidar com as manias estranhas de cada um.";
            var ator = "Paco León, Alexandra Jiménez, Rossy de Palma" ;
            var diretor = "Vicente Villanueva";
            var nota = "93%";
            var genero = "Comédia ";
            var data ="2017" ;
            var foto =  '<img src="assets/img/2015.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "Mistério do Mediterrâneo";
            var descricao = "Numa aguardada viagem à Europa, um policial de Nova Iorque sua esposa cabeleireira tentam solucionar um caso de assassinato a bordo do iate de um bilionário.";
            var ator = "Adam Sandler, Jennifer Aniston, Luke Evans";
            var diretor = "Kyle Newacheck";
            var nota = "86%";
            var genero = "Comédia ";
            var data =  "2019";
            var foto =  '<img src="assets/img/2016.gif" height="280" width="420" style="vertical-align: left;">';
          
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
        else if (sorteio==18) {
            var titulo = "O Plano Imperfeito";
            var descricao = "Desesperados por um pouco de sossego, dois assistentes exaustos unem forças para fazer com que seus chefes workaholics se apaixonem.";
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
        else if (sorteio==19) {
            var titulo = "Ricos de Amor";
            var descricao = "Teto é um jovem rico que quer conquistar Paula, sua crush. Mas, para isso, precisa contar uma mentira que pode virar a sua vida de cabeça para baixo.";
            var ator = "Giovanna Lancellotti, Danilo Mesquita, Ernani Moraes";
            var diretor = "Bruno Garotti";
            var nota = "94%";
            var genero = "Comédia ";
            var data =  "2020";
            var foto =  '<img src="assets/img/2019.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "Superbad: É hoje!";
            var descricao = "Dois amigos tentam comprar bebida para uma festa e impressionar as garotas, mas acabam se envolvendo em uma série de aventuras malucas.";
            var ator ="Jonah Hill, Michael Cera, Christopher Mintz-Plasse" ;
            var diretor = "Greg Mottola";
            var nota =  "91%";
            var genero = "Comédia  " ;
            var data = "2007" ;
            var foto =  '<img src="assets/img/2020.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "Esse é meu Garoto";
            var descricao = "O que esperar quando o seu pai maluco se muda para a sua casa às vésperas de seu casamento, desesperado para recuperar o tempo perdido? Confusão na certa.";
            var ator ="Adam Sandler, Andy Samberg, Leighton Meester";
            var diretor = "Sean Anders";
            var nota =  "84%";
            var genero = "Comédia ";
            var data =  "2012";
            var foto =  '<img src="assets/img/2021.gif" height="280" width="420" style="vertical-align: left;">';
           
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
