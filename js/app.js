App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function() {
  this.route('about');
  this.resource('bands', function(){
    this.resource('band', {path: '/:band_id'});
  });
  this.resource('releases', function(){
    this.resource('release', {path: '/:release_id'});
  });
});

App.Band = DS.Model.extend({
  name: DS.attr('string'),
  bio: DS.attr('string'),
  image: DS.attr('string'),
  releases: DS.hasMany('release', {async: true})
});

App.Band.FIXTURES = [
  {
    id:1,
    name:'Alpha Male Tea Party',
    bio:"Alpha Male Tea Party are one of them bands from Liverpool that don’t sound like a band from Liverpool, playing an aggressive yet melodic breed of guitar driven math-rock which nods to the likes of Brontide, You Slut! and Tera Melos. They've toured the UK with Axes, Cleft and Vasquez (Big Scary Monsters), having previously played with Adebisi Shank, And So I Watch You From Afar and Tubelord amongst many others.",
    image:'./images/amtp.jpg',
    releases:[213]
  },
  {
    id:2,
    name:'Black Market Serotonin',
    bio:"Black Market Serotonin make a no-bullshit racket. Influenced by Porcupine Tree, Nine Inch Nails and Muse, they're a part of the scene that birthed Cyril Snear and Trojan Horse, and just once were crazy enough to do a Chris de Burgh cover.",
    image:'./images/bms.jpg',
    releases:[201,202,203,204,205]
  },
  {
    id:3,
    name:'Dune',
    bio:"The first release on the label was Dune's debut single, and the video is still on our YouTube channel. The band since changed their name to Peak District, then Packt, later releasing a fantastic mini-album called 'All Day I Dream of Life'.",
    image:'./images/dune.jpg',
    releases:[211]
  },
  {
    id:4,
    name:'Kinetics',
    bio:"The first math band on the label, Kinetics released a lone single as well as a demo called 'If There Is Hope, It Lies With The Proles'. Then their members moved to different places and that was that.",
    image:'./images/kinetics.jpg',
    releases:[210]
  },
  {
    id:5,
    name:'Metamusic',
    bio:"Metamusic's World to Come EP still ranks among the finest short recordings any of us have ever heard, and their Biffy Clyro-meets-early-Verve trip hop madness earned them a cult following before they went on indefinite hiatus.",
    image:'./images/mm.jpg',
    releases:[212]
  },
  {
    id:6,
    name:'Ninetails',
    bio:"Included in the Independent's 'Sounds of 2013' list, Ninetails have been compared to everything from Foals and Battles to Brian Eno. Their recent 'Slept And Did Not Sleep' song cycle drew breathless praise from pretty much everyone that heard it. Their new EP is still hush-hush, but due on a much bigger label in 2014.",
    image:'./images/nt.jpg',
    releases:[206,207,208,209]
  },
  {
    id:7,
    name:'Nowhere Again',
    bio:"Nowhere Again was Alex and Jonny's band. Over 6 years they went from a metal band to a shoegaze band and back again. Before they called it a day, they were compared to Ride, Radiohead, Spiritualized and Oceansize.",
    image:'./images/na.jpg',
    releases:[214,215,216]
  }
];

App.Release = DS.Model.extend({
  name: DS.attr('string'),
  release_date: DS.attr('string'),
  artwork: DS.attr('string'),
  link: DS.attr('string'),
  cat: DS.attr('string'),
  band: DS.belongsTo('band')
});

App.Release.FIXTURES = [
  {
    id:201,
    name:'Deadbyfiveoclock Single',
    release_date:'06 November 2010',
    artwork:'http://f0.bcbits.com/img/a1218218605_10.jpg',
    link:'http://superstardestroyer.bandcamp.com/album/deadbyfiveoclock-single',
    cat:'SSDCD02/SSDDL04',
    band:2
  },
  {
    id:202,
    name:'Deadbyfiveoclock EP',
    release_date:'11 April 2011',
    artwork:'http://f0.bcbits.com/img/a0075209602_10.jpg',
    link:'http://superstardestroyer.bandcamp.com/album/deadbyfiveoclock',
    cat:'SSDCD03/SSDDL06',
    band:2
  },
  {
    id:203,
    name:'A Spaceman Came Travelling',
    release_date:'06 December 2011',
    artwork:'http://f0.bcbits.com/img/a1000706034_10.jpg',
    link:'http://superstardestroyer.bandcamp.com/album/a-spaceman-came-travelling',
    cat:'No cat number.',
    band:2
  },
  {
    id:204,
    name:'Irons In The Fire',
    release_date:'25 February 2013',
    artwork:'http://f0.bcbits.com/img/a1776361996_2.jpg',
    link:'http://superstardestroyer.bandcamp.com/album/irons-in-the-fire',
    cat:'SSDDL14',
    band:2
  },
  {
    id:205,
    name:'Something From Nothing',
    release_date:'29 April 2013',
    artwork:'http://f0.bcbits.com/img/a1437243745_2.jpg',
    link:'http://superstardestroyer.bandcamp.com/album/something-from-nothing',
    cat:'SSDCD09/SSDDL15',
    band:2
  },
  {
    id:206,
    name:'Ghost Ride The Whip',
    release_date:'10 October 2011',
    artwork:'http://f0.bcbits.com/img/a2758639165_2.jpg',
    link:'http://superstardestroyer.bandcamp.com/album/ghost-ride-the-whip',
    cat:'SSDCD06',
    band:6
  },
  {
    id:207,
    name:'Rawdon Fever',
    release_date:'27 February 2012',
    artwork:'http://f0.bcbits.com/img/a1084832043_10.jpg',
    link:'http://superstardestroyer.bandcamp.com/album/rawdon-fever',
    cat:'SSDDL11',
    band:6
  },
  {
    id:208,
    name:'Blue Bottle Flu',
    release_date:'21 May 2012',
    artwork:'http://f0.bcbits.com/img/a1734876965_10.jpg',
    link:'http://superstardestroyer.bandcamp.com/album/blue-bottle-flu',
    cat:'SSDDL12',
    band:6
  },
  {
    id:209,
    name:'Slept And Did Not Sleep',
    release_date:'10 December 2012',
    artwork:'http://f0.bcbits.com/img/a1464082123_10.jpg',
    link:'http://superstardestroyer.bandcamp.com/album/slept-and-did-not-sleep',
    cat:'SSDCD09/SSDDL13',
    band:6
  },
  {
    id:210,
    name:"I Don't Like This Town Any More Than You Do",
    release_date:'06 February 2011',
    artwork:'http://f0.bcbits.com/img/a2665850275_10.jpg',
    link:'http://superstardestroyer.bandcamp.com/track/i-dont-like-this-town-any-more-than-you-do',
    cat:'SSDDL02',
    band:4
  },
  {
    id:211,
    name:"Golden Snake",
    release_date:'02 November 2010',
    artwork:'http://f0.bcbits.com/img/a3690111613_10.jpg',
    link:'http://superstardestroyer.bandcamp.com/album/golden-snake-single',
    cat:'SSDCD01/SSDDL03',
    band:3
  },
  {
    id:212,
    name:"World to Come",
    release_date:'04 April 2011',
    artwork:'http://f0.bcbits.com/img/a3398996820_10.jpg',
    link:'http://superstardestroyer.bandcamp.com/album/world-to-come',
    cat:'SSDCD04/SSDDL05',
    band:5
  },
  {
    id:213,
    name:"Real Ale and Model Rail: The Lonely Man's Guide to Not Committing Suicide",
    release_date:'26 August 2013',
    artwork:'http://f0.bcbits.com/img/a2021354694_10.jpg',
    link:'http://superstardestroyer.bandcamp.com/album/real-ale-and-model-rail-the-lonely-mans-guide-to-not-committing-suicide',
    cat:'SSDCD10/SSDDL15',
    band:1
  },
  {
    id:214,
    name:"Plans Single",
    release_date:'25 September 2009',
    artwork:'http://f0.bcbits.com/img/a0002218971_10.jpg',
    link:'http://superstardestroyer.bandcamp.com/album/plans-single',
    cat:'No cat number.',
    band:7
  },
  {
    id:215,
    name:"Now I am Twenty",
    release_date:'09 May 2011',
    artwork:'http://f0.bcbits.com/img/a3544605574_10.jp7',
    link:'http://superstardestroyer.bandcamp.com/album/now-i-am-twenty',
    cat:'SSDCD05/SSDDL07',
    band:7
  },
  {
    id:216,
    name:"Han Shot First",
    release_date:'24 October 2011',
    artwork:'http://f0.bcbits.com/img/a3923679758_10.jpg',
    link:'http://superstardestroyer.bandcamp.com/album/han-shot-first',
    cat:'SSDDL08',
    band:7
  }
];

App.ApplicationController = Ember.Controller.extend({
  year: function(){
    var d = new Date();
    return d.getFullYear();
  }.property()
});

App.IndexRoute = Ember.Route.extend({
  model: function() {   
  }
});

App.BandsIndexRoute = Ember.Route.extend({
  model:function(){
    return this.store.findAll('band');
  }
});

App.BandRoute = Ember.Route.extend({
  model:function(params){
    return this.store.find('band', params.band_id);
  }
});

App.ReleasesIndexRoute = Ember.Route.extend({
  model:function(){
    return this.store.findAll('release');
  }
});

App.ReleaseRoute = Ember.Route.extend({
  model:function(params){
    return this.store.find('release', params.release_id);
  }
});