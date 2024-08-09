# TechNews

Questo è un progetto Angular che visualizza notizie ottenute dall'API di Hacker News. La componente principale è `HomeComponent`, che mostra un elenco di articoli con la possibilità di visualizzarne di più o di meno.

## Indice

- [Installazione](#installazione)
- [Componente principale](#componente)
- [Utilizzo](#utilizzo)
- [API](#api)

## Installazione

Per eseguire questo progetto in locale, segui questi passaggi:

1. Clona il repository:
   `git clone https://github.com/DanielIozia/TechNews.git`

2. Vai nella directory del progetto `cd TechNews`

3. `npm install`

4. `ng serve`

## Componente

`HomeComponent` è responsabile della visualizzazione di un elenco di notizie. Utilizza il servizio NewsService per recuperare gli ID delle notizie e i dettagli relativi. La componente fornisce funzionalità per visualizzare più o meno articoli sulla pagina.

## Utilizzo

L'applicazione carica le ultime notizie dall'API di Hacker News.
Puoi visualizzare:

- più articoli cliccando sul pulsante `Show More`;
- meno articoli cliccando sul pulsante `Show Less`;

## API

L'applicazione si interfaccia con l'API di Hacker News per fornire funzionalità di gestione degli articoli. Di seguito sono elencati gli endpoints principali forniti dal servizio NewsService.

### ID News

  - Metodo: `GET`
  - Endpoint: `https://hacker-news.firebaseio.com/v0/newstories.json`
  - Descrizione: Ottiene tutti gli ID delle notizie.


### News Detail 
  - Metodo: `GET`
  - Endpoint: `https://hacker-news.firebaseio.com/v0/item/ID.json`
  - Ottiene i dettagli della singola notizia

Questo progetto è stato generato con la versione 17. [Angular CLI](https://github.com/angular/angular-cli)
