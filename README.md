# Almav Mapas Interativos API

## Sobre o Projeto

Este repositório contém exemplos e documentação para utilizar a API do Mapa Interativo da Almav.

![almav Mapa Interativo](https://raw.githubusercontent.com/almav/zetta.almav.com.br-residencialreservadorio/main/assets/images/screen01.png)

## Índice

### Visão Geral
- [Sobre o Projeto](#sobre-o-projeto)
- [Demonstração](#demonstração)
- [Chave da API](#chave-da-api)

### Mapa em Perspectiva
- [Funcionalidade de Perspectiva](#mapa-em-perspectiva)
- [Configuração](#configuração-de-perspectiva)

### Instalação e Uso
- [Exemplo de Uso](#exemplo-de-uso)
  1. [Regras CSS](#1-crie-regras-css-para-uso-do-mapa)
  2. [Função de Inicialização](#2-crie-uma-função-initmap-para-inicializar-o-mapa)
  3. [Elemento HTML](#3-crie-um-elemento-html-para-exibir-o-mapa)
  4. [Script do Mapa](#4-crie-o-script-do-mapa-com-chave-de-api-e-nome-da-função-de-callback)

### Integração com Plataformas
- [Integração com WordPress](#integração-com-wordpress)
  - [Método 1: Editor de Código Personalizado](#método-1-através-do-editor-de-código-personalizado)
  - [Método 2: Plugin de Inserção de Código](#método-2-utilizando-plugin-de-inserção-de-código-personalizado)
- [Integração com Elementor](#integração-com-elementor)
  - [Método 3: Inserção no Elementor](#método-3-inserção-do-mapa-no-elementor)

### Compatibilidade e Requisitos
- [Execução Fora de Iframes](#execução-fora-de-iframes)
- [Compatibilidade com Navegadores Modernos](#compatibilidade-com-navegadores-modernos)
- [Requisitos do Mapa Interativo](#requisitos-do-mapa-interativo)

### Dependências
- [Bibliotecas Utilizadas](#dependências)

### Suporte e Informações Adicionais
- [Mais Informações](#para-mais-informações)

---

## Chave da API

**Chave da API:** `8fab008c-f4a6-4d23-a0e5-4c9cd5af05bc`

## Demonstração

- Tela inteira (index.html): 
  - https://zetta.almav.com.br/residencialreservadorio/

- Website DIV (exemplo02.html):
  - https://zetta.almav.com.br/residencialreservadorio/exemplo02.html
  
- Aviso de rolagem da página (exemplo03.html):
  - https://zetta.almav.com.br/residencialreservadorio/exemplo03.html

![almav Mapa Interativo](https://raw.githubusercontent.com/almav/zetta.almav.com.br-residencialreservadorio/main/assets/images/screen02.png)

## Mapa em Perspectiva


A nova versão do Mapa Interativo contém a funcionalidade do botão: perspectiva.

### Configuração de Perspectiva

Para incluir o botão da perspectiva, você deve chamar a função `waitForMap` após o carregamento dos layers.

```javascript
  map = new almav.maps.Map(document.getElementById('map'), {
      layersReady: () => waitForMap(almavMap1),
  });
  window.waitForMap = (mapInstance) => {
      // Registra a instância do mapa para uso global
      almavAppMap.registerMapInstance('almavMap1', mapInstance);
      
      // Inicializa os componentes do mapa
      almavAppMap.addLayerLabelsMap(mapInstance);
      almavAppMap.addPerspectiveButton(mapInstance);
  }
```

O Mapa Interativo já está preparado com as configurações referentes à chave da API e o empreendimento.

## Exemplo de Uso

### 1. Crie Regras CSS para Uso do Mapa

```html
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #333;
            overflow: hidden;
        }

        html,
        body,
        #map {
            height: 100%; /* IMPORTANTE: definir a altura do elemento */ 
        }

        #map {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
        }
    </style>
```

### 2. Crie uma Função `initMap` para Inicializar o Mapa

 ```html
    <script>
        /*
            Inicializar o mapa
            -------------------
            * A função `initMap` será executada após o carregamento do mapa.
            * O parâmetro da url `callback` é o nome da função que será 
            executada após o carregamento do mapa. 
            Por exemplo: `callback=initMap`.
        */
        function initMap() {
            // Criar o objeto do mapa e definir o ID `almavMap1` como destino
            almavMap1 = new almav.maps.Map(document.getElementById('almavMap1'), {
                fitBounds: true, // Ajustar o zoom para os limites dos elementos
                showButtonsZoom: true, // mostra botões de zoom in e zoom out
            });
        }
    </script>
```

### 3. Crie um Elemento HTML para Exibir o Mapa
   
```html
    <!-- Esse é o elemento que receberá o mapa -->
    <div id="almavMap1"></div>
```

### 4. Crie o Script do Mapa com Chave de API e Nome da Função de Callback

Utilize a versão 2 da API: `/apiv2/`.

```html
    <!-- Importante -->
    <!-- key: é a chave de API -->
    <!-- callback: é o nome da função que será executada após o carregamento do mapa -->
    <script
        src="https://maps.app.almav.com/apiv2/js/almav-initmap.js?key=8fab008c-f4a6-4d23-a0e5-4c9cd5af05bc&callback=initMap"
        defer></script>
```

## Execução Fora de Iframes

- O mapa não deve ser executado dentro de iframes. Isso ocorre porque a API necessita acessar o sinal de GPS do dispositivo para funcionalidades de geolocalização, e a execução dentro de um iframe pode impedir o acesso a esse sinal. Portanto, a página que contém o mapa deve ser carregada diretamente no navegador e não embutida em outra página através de um iframe.

## Compatibilidade com Navegadores Modernos

- **Google Chrome:** A partir da versão 61, o Chrome oferece suporte completo para ES Modules e WebGL.
- **Mozilla Firefox:** A partir da versão 60, o Firefox oferece suporte completo para ES Modules e WebGL.
- **Microsoft Edge:** A partir da versão 16, o Edge oferece suporte completo para ES Modules e WebGL.
- **Safari:** A partir da versão 10.1, o Safari oferece suporte completo para ES Modules e WebGL.

Certifique-se de que os usuários do mapa estejam utilizando versões atualizadas desses navegadores para garantir a melhor experiência e funcionalidade completa.

## Requisitos do Mapa Interativo

1. **Compatibilidade com ES Modules:**
   - A API do Mapa Interativo da Almav utiliza módulos ES (ES Modules). Certifique-se de que o ambiente onde a aplicação será executada seja compatível com ES Modules. Navegadores modernos como Google Chrome, Mozilla Firefox, Microsoft Edge e Safari oferecem suporte completo para ES Modules.

2. **Suporte a WebGL:**
   - A renderização do mapa depende do suporte a WebGL. Verifique se o navegador utilizado oferece suporte a WebGL. Caso contrário, o mapa não poderá ser exibido. Navegadores modernos, incluindo Google Chrome, Mozilla Firefox, Microsoft Edge e Safari, geralmente oferecem suporte a WebGL. Para verificar se o navegador é compatível, você pode acessar [get.webgl.org](https://get.webgl.org/).

3. **Execução Fora de Iframes:**
   - O mapa não deve ser executado dentro de iframes. Isso ocorre porque a API necessita acessar o sinal de GPS do dispositivo para funcionalidades de geolocalização, e a execução dentro de um iframe pode impedir o acesso a esse sinal. Portanto, a página que contém o mapa deve ser carregada diretamente no navegador e não embutida em outra página através de um iframe.

## Dependências

- [MapLibre GL JS](https://maplibre.org/) para renderização de Mapas Interativos e a API personalizada da Almav para configurações específicas do mapa.
- [PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe) para exibir imagens e galerias.

Todas as dependências são instaladas automaticamente com a API. Você não vai precisar instalar manualmente ou incluir arquivos adicionais.

## Para Mais Informações

Acesse [https://almav.com/](https://almav.com/)

## Integração com WordPress

### Instalação do Mapa Interativo em WordPress

Para integrar o Mapa Interativo da Almav em um site WordPress, siga estas etapas:

1. **Método de Injeção de JavaScript**

   Existem duas formas principais de adicionar o Mapa Interativo ao seu site WordPress:

   #### Método 1: Através do Editor de Código Personalizado

   a. Abra o editor de página ou post no WordPress.
   b. Alterne para a visualização de código HTML.
   c. Adicione o seguinte código:

   ```html
   <!-- Contêiner do Mapa -->
   <div id="map" style="width: 100%; height: 500px;"></div>

   <!-- Estilos do Mapa -->
   <style>
     #map {
       position: relative;
       width: 100%;
       height: 500px;
     }
   </style>

   <!-- Script de Inicialização do Mapa -->
   <script>
     function initMap() {
       map = new almav.maps.Map(document.getElementById('map'), {
         fitBounds: true,
         showButtonsZoom: true,
       });
     }
   </script>

   <!-- Carregamento do Script do Mapa Almav -->
   <script 
     src="https://maps.app.almav.com/apiv2/js/almav-initmap.js?key=8fab008c-f4a6-4d23-a0e5-4c9cd5af05bc&callback=initMap" 
     defer>
   </script>
   ```

   #### Método 2: Utilizando Plugin de Inserção de Código Personalizado

   a. Instale um plugin como "Insert Headers and Footers" ou "Code Snippets".
   b. Adicione o código acima na seção de cabeçalho (header) ou no local desejado.

2. **Considerações Importantes**

   - **Compatibilidade:** Certifique-se de que o tema WordPress não interfira no carregamento do script.
   - **Responsividade:** Ajuste o estilo `#map` para garantir que o mapa seja responsivo.
   - **Conflitos de JavaScript:** Verifique se não há conflitos com outros scripts do tema.

3. **Solução de Problemas**

   - Se o mapa não carregar, verifique:
     * A chave da API está correta
     * Não há bloqueios de script no tema
     * O navegador suporta ES Modules e WebGL

4. **Personalização Avançada**

   Você pode personalizar ainda mais o mapa adicionando opções como:

   ```javascript
   almavMap1 = new almav.maps.Map(document.getElementById('almavMap1'), {
                fitBounds: true, // Ajustar o zoom para os limites dos elementos
                bearing: -54, // Ângulo de rotação do mapa
                maxPitch: 55, // Inclinação máxima do mapa
                showZoom: true, // mostra botões de zoom in e zoom out
                maxZoom: 21,
                showCompass: false,
                showCompassAlt: { show: true, position: 'top-right', order: -1, title: 'Mostrar direção do Norte', display_none_max_height: '335px' },
                geolocate: { show: true, order: 99, message: 'permitir GPS', timeout: 15000 },
                almavLogo: true,
                almavAttribution: true,
                layersReady: () => waitForMap(almavMap1), // Esperar o mapa ser carregado e chama a função para criar a extrusão
                fullscreen: {
                    show: true,
                    display_none_max_height: '390px', // Ocultar em telas com altura <= 390px
                    display_none_max_width: '550px' // Ocultar em telas com largura <= 550px
                },
                recenter: { show: true, display_none_max_height: '285px' }
            });
   ```

### Notas de Compatibilidade

- **Versões do WordPress:** Testado em WordPress 5.0 e superiores
- **Navegadores Compatíveis:** Chrome, Firefox, Safari, Edge (versões recentes)

**Aviso:** Sempre faça backup do seu site antes de realizar modificações.

### Integração com Elementor

#### Método 3: Inserção do Mapa no Elementor

Para integrar o Mapa Interativo da Almav usando o Elementor, siga estas etapas detalhadas:

1. **Preparação Inicial**

   - Certifique-se de que o plugin Elementor está instalado e ativado no seu WordPress.
   - Tenha em mãos a chave da API Almav: `8fab008c-f4a6-4d23-a0e5-4c9cd5af05bc`

2. **Inserção do Mapa**

   a. Edite a página desejada no Elementor.
   
   b. Adicione um novo widget "HTML" ao seu layout:
      - Arraste o widget "HTML" para a seção desejada.
      - Abra as configurações do widget.

   c. Cole o seguinte código no editor HTML do widget:

   ```html
   <!-- Contêiner do Mapa -->
   <div id="map" style="width: 100%; height: 500px;"></div>

   <!-- Estilos do Mapa -->
   <style>
     #map {
       position: relative;
       width: 100%;
       height: 500px;
     }
   </style>

   <!-- Script de Inicialização do Mapa -->
   <script>
     function initMap() {
       map = new almav.maps.Map(document.getElementById('map'), {
         fitBounds: true,
         showButtonsZoom: true,
       });
     }
   </script>

   <!-- Carregamento do Script do Mapa Almav -->
   <script 
     src="https://maps.app.almav.com/apiv2/js/almav-initmap.js?key=8fab008c-f4a6-4d23-a0e5-4c9cd5af05bc&callback=initMap" 
     defer>
   </script>
   ```

3. **Configurações Recomendadas no Elementor**

   - **Responsividade:** 
     * Ajuste a altura do mapa nas configurações de estilo do widget.
     * Use as opções de responsividade do Elementor para garantir que o mapa se adapte a diferentes tamanhos de tela.

   - **Espaçamento:**
     * Utilize as configurações de margem e padding do Elementor para posicionar o mapa corretamente.

4. **Dicas Avançadas**

   - **Personalização do Mapa:**
     ```javascript
     map = new almav.maps.Map(document.getElementById('map'), {
       fitBounds: true,
       showButtonsZoom: true,
     });
     ```

5. **Solução de Problemas Específicos do Elementor**

   - **Conflitos de Script:**
     * Se o mapa não carregar, desative temporariamente outros plugins.
     * Verifique se não há conflitos com scripts de outros widgets.

   - **Carregamento Condicional:**
     * Em alguns casos, pode ser necessário adicionar o script de carregamento do mapa nas configurações globais do Elementor ou através de um plugin de inserção de código.

6. **Compatibilidade**

   - **Versões do Elementor:** Testado com Elementor Free e Pro (versões 3.0 e superiores)
   - **Temas Compatíveis:** Funciona com a maioria dos temas WordPress modernos

**Observações Importantes:**
- Sempre faça backup do site antes de realizar modificações.
- Teste o mapa em diferentes dispositivos e tamanhos de tela.
- Verifique a compatibilidade com outros plugins e temas.