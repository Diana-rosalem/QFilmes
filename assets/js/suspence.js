//função do sorteio   
function sorteiosuspence(){ 
    //var sorteio=2
        //Jogada do sorteio
        var sorteio = 1 + Math.floor(Math.random()*21)
        
        //ver qual filme foi sorteado
        if (sorteio==1) {
            var titulo = "Seven: Os Sete Crimes Capitais";
            var descricao = "Um detetive de homicídios veterano e seu novo parceiro caçam um assassino em série que baseia seus crimes nos setes pecados capitais.";
            var ator ="Brad Pitt, Morgan Freeman, Gwyneth Paltrow";
            var diretor = "David Fincher";
            var nota = "90%";
            var genero = "Suspense";
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
            var titulo = "Garota Exemplar";
            var descricao = "Com seu casamento em ruínas, Nick chega em casa um dia e descobre que sua esposa desapareceu. E quando a polícia pressiona, verdades chocantes vêm à tona.";
            var ator = "Ben Affleck, Rosamund Pike, Neil Patrick Harris";
            var diretor ="David Fincher";
            var nota =  "87%";
            var genero = "Suspense";
            var data =  "2014";
            var foto =  '<img src="assets/img/6002.gif" height="280" width="420" style="vertical-align: left;">';

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
            var titulo = "Hush - A Morte Ouve";
            var descricao = "A escritora Meddie prefere a solidão e é surda. Quando um homem mascarado surge em sua janela, serão desvantagens a superar em tempo recorde. Ou não?.";
            var ator = "Kate Siegel, John Gallagher Jr., Michael Trucco";
            var diretor = "Mike Flanagan";
            var nota = "87%" ;
            var genero = "Suspense";
            var data = "2016" ;
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

        else if (sorteio==4) {
            var titulo = "Versões de um Crime";
            var descricao = "Ao tentar absolver se o cliente adolescente acusado de matar o pai milionário, um advogado de defesa e descobre fatos perturbadores sobre a vítima." ;
            var ator = "Keanu Reeves, Renée Zellweger, Gugu Mbatha-Raw";
            var diretor = "Courtney Hunt";
            var nota = "84%" ;
             var genero = "Suspense";
            var data ="2016"  ;
            var foto =  '<img src="assets/img/6004.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo ="O Poço " ;
            var descricao = "Nesta prisão, a comida distribuída de cima para baixo. Quem está nos andares de cima come a vontade. Quem está embaixo fica com fome. Um prato cheio para uma reunião.";
            var ator = "Iván Massagué, Antonia San Juan, Zorion Eguileor" ;
            var diretor = "Galder Gaztelu-Urrutia" ;
            var nota = "77%" ;
             var genero = "Suspense";
            var data = "2020 " ;
            var foto =  '<img src="assets/img/6005.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "Atômica" ;
            var descricao ="Com a morte de mais um espião, a agente Lorraine Broughton  precisa encontrar um importante documento desaparecido, descobrir quem é o traidor e ainda sair dessa viva.";
            var ator = "Charlize Theron, James McAvoy, Sofia Boutella";
            var diretor = "David Leitch";
            var nota ="83%";            
            var genero = "Suspense";
            var data =  "2017";
            var foto =  '<img src="assets/img/6006.gif" height="280" width="420" style="vertical-align: left;">';

            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero;
            datafilme.innerHTML =  data
            document.getElementById("fotofilme").innerHTML = foto
        }

        else if (sorteio==7) {
            var titulo = "Ilha do Medo";
            var descricao = "Quando o inspetor Teddy Daniels chega penitenciária psiquiátrica, o que começa como uma investigação de rotina sofre uma reviravolta sinistra e quase irreversível.";
            var ator ="Leonardo DiCaprio, Mark Ruffalo, Ben Kingsley" ;
            var diretor = "Martin Scorsese";
            var nota = "93%";
            var genero = "Suspense";
            var data = "2010 ";
            var foto =  '<img src="assets/img/6007.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "Mentiras Perigosas" ;
            var descricao = "Uma cuidadora herda os bens de seu paciente. Mal sabe ela que essa riqueza inesperada também trará segredos sombrios, traições e perigos.";
            var ator =  "Camila Mendes, Jessie T. Usher, Jamie Chung";
            var diretor = "Michael Scott";
            var nota = "95%";
             var genero = "Suspense";
            var data =  "2020";
            var foto =  '<img src="assets/img/6008.gif" height="280" width="420" style="vertical-align: left;">'; 


            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero;
            datafilme.innerHTML = data;
            document.getElementById("fotofilme").innerHTML = foto;
        }   

        else if (sorteio==9) {
            var titulo = "Sombra Lunar";
            var descricao = "Um investigador obcecado em encontrar uma misteriosa serial killer coloca a própria sanidade em risco.";
            var ator =  "Boyd Holbrook, Cleopatra Coleman, Michael C. Hall" ;
            var diretor = "Jim Mickle" ;
            var nota = "79%";
             var genero = "Suspense";
            var data = "2019";
            var foto =  '<img src="assets/img/6009.gif" height="280" width="420" style="vertical-align: left;">';
          
            titulofilme.innerHTML = titulo;
            descricaofilme.innerHTML = descricao;
            atorfilme.innerHTML = ator;
            diretorfilme.innerHTML = diretor;
            notafilme.innerHTML = nota;
            generofilme.innerHTML = genero;
            datafilme.innerHTML =  data;
            document.getElementById("fotofilme").innerHTML = foto;
        }
        else if (sorteio==10) {
            var titulo = "Psicose";
            var descricao = "Quando uma funcionária de imobiliária comete um roubo e foge com um Monte de dinheiro,esperando começar uma nova vida, ela acaba no famoso Hotel Bates.";
            var ator = "Anthony Perkins, Janet Leigh, John Gavin";
            var diretor = "Alfred Hitchcock";
            var nota = "86%";
             var genero = "Suspense";
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

        else if (sorteio==11) {
            var titulo = "Rastros de um Sequestro";
            var descricao =  "Quando seu irmão é sequestrado e retorna totalmente diferente sem se lembrar dos últimos 19 dias, o jovem Jin-Seok embarca em uma perigosa jornada em busca da verdade.";
            var ator =  "Han Da-eun, Kang Ha Neul, Kim Mu-Yeol";
            var diretor ="Jang Hang-jun" ;
            var nota ="93%" ;
            var genero = "Suspense";
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
        
        else if (sorteio==12) {
            var titulo = "Um Contratempo";
            var descricao = "Após acordar ao lado de sua amante assassinada em quarto de hotel, um empresário contrata uma advogada para descobrir como ele acabou sendo suspeito de um homicídio.";
            var ator = "Mario Casas, Bárbara Lennie, Ana Wagener";
            var diretor = "Oriol Paulo";
            var nota = "94%" ;
            var genero = "Suspense";
            var data =  "2016";
            var foto =  '<img src="assets/img/6012.gif" height="280" width="420" style="vertical-align: left;">';

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
            var titulo = "Corra!";
            var descricao ="Um jovem negro viaja com a namorada branca para conhecer seus pais. Mas o que parece simpatia hospitalidade esconde um segredo sinistro.";
            var ator ="Daniel Kaluuya, Allison Williams, Catherine Keener";
            var diretor = "Jordan Peele";
            var nota ="89%" ;
            var genero = "Suspense";
            var data = "2017";
            var foto =  '<img src="assets/img/6013.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo =  "Badla";
            var descricao = "Um renomado advogado assume o caso de uma mulher acusada de matar seu amante. Quanto mais eles tentam desvendar a verdade, mais obscura a situação fica.";
            var ator = "Amitabh Bachchan, Taapsee Pannu, Amrita Singh" ;
            var diretor = "Sujoy Ghosh";
            var nota = "94%";
            var genero = "Suspense";
            var data =  "2019";
            var foto =  '<img src="assets/img/6014.gif" height="280" width="420" style="vertical-align: left;">'; 
          
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
            var titulo = "A Noite nos Persegue";
            var descricao = "Após poupar a vida de uma garota durante o massacre, um assassino de elite se torna alvo do ataque de criminosos.";
            var ator = "Joe Taslim, Iko Uwais, Julie Estelle";
            var diretor = "Timo Tjahjanto";
            var nota = "91%";
            var genero = "Suspense";
            var data = "2018" ;
            var foto =  '<img src="assets/img/6015.gif" height="280" width="420" style="vertical-align: left;">'; 
          
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
            var titulo = "Durante a Tormenta";
            var descricao = "Um defeito no espaço tempo permite que Vera salve a vida de um garoto, mas isso leva a perder a própria filha. Agora, seu único objetivo é recuperá-la.";
            var ator ="Adriana Ugarte, Chino Darín, Javier Gutiérrez";
            var diretor =  "Oriol Paulo";
            var nota = "94%";
            var genero = "Suspense";
            var data =  "2017";
            var foto =  '<img src="assets/img/6016.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "Jogo Perigoso";
            var descricao = "Quando as brincadeiras sexuais do marido dão errado, Jessie, algemada a uma cama numa casa distante, encara visões alucinantes, segredos sombrios e uma escolha terrível.";
            var ator = "Carla Gugino, Bruce Greenwood, Henry Thomas" ;
            var diretor ="Mike Flanagan";
            var nota ="78%" ;
            var genero = "Suspense";
            var data =   "2017";
            var foto =  '<img src="assets/img/6017.gif" height="280" width="420" style="vertical-align: left;">';

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
            var titulo = "O Guardião Invisível";
            var descricao = "Ao voltar para a sua cidade Natal em busca de um assassino, uma policial é forçada a encarar seus próprios demônios do passado. A primeira parte da trilogia Baztán.";
            var ator = "Marta Etura, Elvira Minguez, Francesc Orella";
            var diretor = "Fernando González Molina";
            var nota = "82%";
            var genero = "Suspense";
            var data =  "2017";
            var foto =  '<img src="assets/img/6018.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "O Som ao Redor";
            var descricao = "Um singular grupo de vizinhos endinheirados contrata uma empresa de segurança privada para proteger o edifício, mas os vigias só pioram o problema.";
            var ator ="Irandhir Santos, Gustavo Jahn, Maeve Jinkings";
            var diretor = "Kleber Mendonça Filho";
            var nota = "86%";
            var genero = "Suspense";
            var data =  "2013";
            var foto =  '<img src="assets/img/6019.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "Truque de Mestre";
            var descricao = "Um grupo de ilusionistas se especializa em roubar bancos e dar o dinheiro para o público enquanto despista agentes do FBI.";
            var ator ="Jesse Eisenberg, Mark Ruffalo, Woody Harrelson" ;
            var diretor = "Louis Leterrier";
            var nota =  "93%";
             var genero = "Suspense";
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
        else {
            var titulo = "Alerta Lobo";
            var descricao = "A guerra Nuclear é iminente. Para evitá-la, o militar especialista em acústica tenta provar que as coisas não são o que parecem-usando apenas os ouvidos.";
            var ator = "François Civil, Omar Sy, Mathieu Kassovitz";
            var diretor ="Antonin Baudry";
            var nota =  "92%";
            var genero = "Suspense";
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
