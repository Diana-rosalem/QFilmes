
//função do sorteio   
    function sorteioromance(){ 
    //var sorteio=2
        //Jogada do sorteio
        var sorteio = 1 + Math.floor(Math.random()*21)
        
        //ver qual filme foi sorteado
        if (sorteio==1) {
            var titulo = "Brilho Eterno de Uma Mente sem Lembranças";
            var descricao ="Clementine participa de um procedimento médico experimental para apagar suas lembranças de Joel, e ele decide fazer o mesmo." ;
            var ator = "Jim Carrey, Kate Winslet, Kirsten Dunst" ;
            var diretor = "Michel Gondry";
            var nota =  "93%";
            var genero = "Romance ";
            var data =   "2004";
            var foto =  '<img src="assets/img/5001.gif" height="280" width="420" style="vertical-align: left;">';
            
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
            var titulo ="A Teoria de Tudo" ;
            var descricao = "Essa cinebiografia do astrofísico Stephen Hawking retrata a importância de seu trabalho, a luta contra uma doença incurável e o amor incondicional de sua esposa.";
            var ator = "Eddie Redmayne, Felicity Jones, Tom Prior";
            var diretor = "James Marsh" ;
            var nota =  "95%" ;
            var genero = "Romance ";
            var data =   "2014";
            var foto =  '<img src="assets/img/3017.gif" height="280" width="420" style="vertical-align: left;">';

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
            var titulo = "Tudo e Todas as Coisas";
            var descricao = "Sem poder sair de casa por causa de um doença autoimune, Meddy vive uma rotina monótona até que um vizinho chega de mudança.";
            var ator = "Amandla Stenberg, Nick Robinson, Ana de la Reguera";
            var diretor ="Stella Meghie";
            var nota ="93%" ;
            var genero = "Romance ";
            var data =  "2017" ;
            var foto =  '<img src="assets/img/5003.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "O Espaço Entre Nós"  ;
            var descricao = "Depois de anos de contato limitado com a Terra, um adolescente curioso que vive em Marte faz uma vigem interplanetária para descobrir suas próprias origens." ;
            var ator = "Asa Butterfield, Britt Robertson, Gary Oldman" ;
            var diretor = "Peter Chelsom";
            var nota = "93%" ;
            var genero = "Romance ";
            var data =  "2017"  ;
            var foto =  '<img src="assets/img/5004.gif" height="280" width="420" style="vertical-align: left;">';
          
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

        else if (sorteio==6) {
            var titulo = "Meu Melhor Amigo";
            var descricao = "Uma misteriosa presença leva as pessoas ao suicídio. Cinco anos depois, uma sobrevivente e seus dois filhos saem em busac de um abrigo seguro." ;
            var ator =  "Angelo Mutti Spinetta, Lautaro Rodríguez, Guillermo Pfening";
            var diretor = "Susanne Bier" ;
            var nota = "87%" ;            
            var genero = "Romance ";
            var data = "2018" ;
            var foto =  '<img src="assets/img/5006.gif" height="280" width="420" style="vertical-align: left;">'; 

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

        else if (sorteio==8) {
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

        else if (sorteio==9) {
            var titulo = "La La Land — Cantando Estações";
            var descricao = "Em Los Angeles, um casal de artistas precisa enfrentar um doloros dilema quando os projetos profissionais de cada um colocam em risco o romance entre os dois.";
            var ator = "Ryan Gosling, Emma Stone, John Legend";
            var diretor = "Damien Chazelle" ;
            var nota = "85%";
            var genero = "Romance" ;
            var data = "2016";
            var foto =  '<img src="assets/img/5009.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "O Melhor Amigo da Noiva";
            var descricao = "Tom tem uma vida agradável: sucesso, mulheres e a melhor amiga, Hannah. Quando ela viaja a trabalho, Tom percebe como sua vida é vazia e resolve pedir sua mão em casamento.";
            var ator = "Patrick Dempsey, Michelle Monaghan, Kevin McKidd";
            var diretor = "Paul Weiland";
            var nota =  "91%";
            var genero = "Romance ";
            var data = "2008" ;
            var foto =  '<img src="assets/img/5010.gif" height="280" width="420" style="vertical-align: left;">';
          
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
        
        else if (sorteio==12) {
            var titulo = "O Plano Imperfeito";
            var descricao = "Desesperados por um pouco de sossego, dois assistentes exaustos unem forças para fazer com que seus chefes Workaholics se apaixonem.";
            var ator = "Zoey Deutch, Glen Powell, Lucy Liu" ;
            var diretor = "Claire Scanlon";
            var nota ="93%";
            var genero = "Romance ";
            var data =   "2018";
            var foto =  '<img src="assets/img/5012.gif" height="280" width="420" style="vertical-align: left;">'; 

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
            var titulo = "Hoje Eu Quero Voltar Sozinho" ;
            var descricao = "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.";
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
        else if (sorteio==14) {
            var titulo =  "O Grande Gatsby";
            var descricao = "Fascinado pelo rico e misterioso Jay Gatsby, o vizinho Nick Carraway é testemunha de seu amor obsessivo e de sua jornada até um destino trágico.";
            var ator = "Leonardo DiCaprio, Tobey Maguire, Carey Mulligan" ;
            var diretor =  "Baz Luhrmann" ;
            var nota = "90%";
            var genero = "Romance ";
            var data =  "2013";
            var foto =  '<img src="assets/img/5014.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo =  "Como Eu Era Antes de Você";
            var descricao = "O coração da ingênua Lou é posto à prova quando ela passa a cuidar de um solteiro rico e ranzinza, que ficou tetraplégico em um acidente.";
            var ator = "Emilia Clarke, Sam Claflin, Janet McTeer" ;
            var diretor = "Thea Sharrock";
            var nota = "95%";
            var genero = "Romance ";
            var data ="2016";
            var foto =  '<img src="assets/img/3010.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "Você nem Imagina";
            var descricao =  "Quando um atleta da escola pediu para Ellie Chu escrever uma carta de amor por ele, ela não imaginava que virariam amigos. E pior, que ela se apaixonaria pela crush dele.";
            var ator =  "Leah Lewis, Alexxis Lemire, Daniel Diemer";
            var diretor = "Alice Wu";
            var nota = "92%";
            var genero = "Romance ";
            var data = "2020";
            var foto =  '<img src="assets/img/5016.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "Ghost o Outro Lado da Vida";
            var descricao = "Sam é morto por um assaltante, mas seu amor pela namorada, Molly, vai além da vida. Como espírito, ele tenta avisar que ela está correndo grave perigo.";
            var ator = "Patrick Swayze, Demi Moore, Whoopi Goldberg";
            var diretor = "Jerry Zucker";
            var nota = "89%" ;
            var genero = "Romance ";
            var data = "1990";
            var foto =  '<img src="assets/img/5017.gif" height="280" width="420" style="vertical-align: left;">';

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
            var titulo = "Ponto Final-Match Point ";
            var descricao = "Neste drama de suspense, um tenista profissonal ambicioso conhece de perto o lado sombrio da alta sociedade.";
            var ator = "Jonathan Rhys-Meyers, Scarlett Johansson, Emily Mortimer";
            var diretor = "Woody Allen";
            var nota = "84%";
            var genero = "Romance ";
            var data =  "2006";
            var foto =  '<img src="assets/img/5018.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "Diário de Uma Paixão";
            var descricao =  "Nos anos 40, um casal de namorados enfrenta a diferença de classe social entre eles e a separação durante a guerra. Baseado no best-seller de Nicholas Sparks.";
            var ator = "Ryan Gosling, Rachel McAdams, James Garner";
            var diretor = "Nick Cassavetes";
            var nota = "93%";
            var genero = "Romance ";
            var data =   "2004";
            var foto =  '<img src="assets/img/5019.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo ="Carol";
            var descricao ="Uma mulher rica casada e uma balconista embarcam em um verdadeiro carrossel de emoções ao se envolverem em um romance proibido em plena década de 1950.";
            var ator ="Cate Blanchett, Rooney Mara, Kyle Chandler" ;
            var diretor = "Todd Haynes";
            var nota =  "88%";
            var genero = "Romance "
            var data = "2015";
            var foto =  '<img src="assets/img/5020.gif" height="280" width="420" style="vertical-align: left;">';
          
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
            var titulo = "Deixe a Neve Cair";
            var descricao = "Uma nevasca assola uma pequena cidade na véspera do Natal, colocando em jogo amizades, romances e o futuro de um grupo de jovens.";
            var ator = "Odeya Rush, Kiernan Shipka, Isabela Merced";
            var diretor = "Luke Snellin";
            var nota =  "84%";
            var genero = "Romance ";
            var data =  "2019";
            var foto =  '<img src="assets/img/5021.gif" height="280" width="420" style="vertical-align: left;">';
           
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
