var app = new Vue({
  el: '#main',
  data: {
    sections: [
      {
        name: 'VIDEOS',
        sites: [
          { name: 'youtube', url: 'https://youtube.com' },
          { name: 'plex', url: 'https://app.plex.tv'},
          { name: 'netflix', url: 'https://netflix.com' }
        ]
      },
      {
        name: 'CHAN',
        sites: [
          { name: 'g', url: 'https://4chan.org/g/' },
          { name: 'britfeel', url: 'https://4chan.org/r9k/#s=britfeel' },
          { name: 'fit', url: 'https://4channel.org/fit/' },
          { name: 'lit', url: 'https://4channel.org/lit/' },
        ]
      },
      {
        name: 'SOCIAL',
        sites: [
          { name: 'r/privacy', url: 'https://reddit.com/r/privacy' },
          { name: 'instagram', url: 'https://instagram.com' },
          { name: 'twitter', url: 'https://twitter.com' }
        ]
      },
      {
        name: 'CODE',
        sites: [
          { name: 'github', url: 'https://github.com' },
          { name: 'scaleway', url: 'https://scaleway.com' },
          { name: 'njalla', url: 'https://njal.la'}
        ]
      },
      {
        name: 'CTFS',
        sites: [
          { name: 'hackthebox', url: 'https://hackthebox.eu' },
          { name: 'vulnhub', url: 'https://vulnhub.com' },
          { name: 'red team', url: 'redteam.html' }
        ]
      },
      {
        name: 'MISC',
        sites: [
          { name: 'amazon', url: 'https://amazon.co.uk' },
          { name: 'protonmail', url: 'https://protonmail.com' },
          { name: 'amazon', url: 'books.html' }
        ]
      }
    ],

    trello: {
      key: '',
      token: '',
      data: {}
    }
  },
  computed: {
  },
  methods: {
    trelloFetchBoard: (boardID) => {
      var data = null;
      var xhr = new XMLHttpRequest();
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          app.trello.data = JSON.parse(this.responseText);
        }
      });
      let endpoint = `https://api.trello.com/1/boards/${boardID}?actions=all&boardStars=none&cards=none&card_pluginData=false&checklists=none&customFields=false&fields=name%2Cdesc%2CdescData%2Cclosed%2CidOrganization%2Cpinned%2Curl%2CshortUrl%2Cprefs%2ClabelNames&lists=open&members=none&memberships=none&membersInvited=none&membersInvited_fields=all&pluginData=false&organization=false&organization_pluginData=false&myPrefs=false&tags=false&key=${app.trello.key}&token=${app.trello.token}`;
      xhr.open("GET", endpoint);
      xhr.send(data);
    }
  }

});
