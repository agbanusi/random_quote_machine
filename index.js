
function Info(props){
    let text='a text-'+props.man.colorer
    return(
        <main>
            <p className={text}><b>“</b> {props.man.main.quote} <b>”</b></p>
            <p className='b'>- {props.man.main.author}</p>
        </main>
    )
}


class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={
      index:0
    }
    this.rand=this.rand.bind(this);
  }
  rand(){
    this.setState({
      index:Math.floor(Math.random()*20)
    })
  }
  render(){
    let arr=[
        {
            quote:'You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children.',
            author:"Madeleine L'Engle"
            
        },
        {
            quote:'One day I will find the right words, and they will be simple.',
            author:'Jack Kerouac'
        },
        {
            quote:'This fire that we call Loving is too strong for human minds. But just right for human souls.',
            author:'Aberjhani, Elemental'   
        },
        {
            quote:"Live in the sunshine, swim the sea, drink the wild air.",
            author:"Ralph Waldo Emerson"
        },
        {
            quote:"A word was more valuable to them when they were not sure of its value. Since they became famous, their word has been more expensive but its value is less.",
            author:"Dejan Stojanovic"
        },
        {
          quote:"All that we see and seem is but a dream within a dream.",
          author:"Edgar Allan Poe"
        },
        {
          quote:"Life itself is the most wonderful fairy tale.",
          author:"Hans Christian Andersen"
        },
        {
          quote:"We are what we repeatedly do; excellence, then, is not an act but a habit.",
          author:"Aristotle"
        },
        {
          quote:"If you aren’t going all the way, why go at all",
          author:"Joe Namath"
        },
        {
          quote:"The person who reads too much and uses his brain too little will fall into lazy habits of thinking.",
          author:"Albert Einstein"
        },
        {
          quote:"Life is not a problem to be solved, but a reality to be experienced.",
          author:"Søren Kierkegaard"
        },
        {
          quote:"Be yourself, everyone else is already taken.",
          author:"Oscar Wilde"
        },
        {
          quote:"Imagination was given to man to compensate him for what he is not, and a sense of humor was provided to console him for what he is.",
          author:"Oscar Wilde"
        },
        {
          quote:"The journey of a thousand miles begins with one step.",
          author:"Lao Tzu"
        },
        {
          quote:"You must be the change you wish to see in the world.",
          author:"Gandhi"
        },
        {
          quote:"The best way out is always through.",
          author:"Robern Frost"
        },
        {
          quote:"Don’t think. Thinking is the enemy of creativity. It’s self-conscious, and anything self-conscious is lousy. You can’t try to do things. You simply must do things.",
          author:"Ray Bradbury"
        },
        {
          quote:"Life is made of ever so many partings welded together.",
          author:"Charles Dickens"
        },
        {
          quote:"Doing the best at this moment puts you in the best place for the next moment.",
          author:"Oprah Winfrey"
        },
        {
          quote:"The power of imagination makes us infinite.",
          author:"John Muir"
        }
    ]
    let u=arr[this.state.index]
    let url='https://twitter.com/intent/tweet?text='+u.quote+'-'+u.author
    let color=['primary','secondary','success','danger','warning','info','dark'][Math.floor(Math.random()*7)]
    let background = 'container-fluid bg-'+color
    let button= 'btn btn-'+color
    return(
      <div className={background}>
        <div className='box' id='quote-box'>
        <Info man={{main:u,colorer:color}} />
        <div className='end'>
        <button className={button}><a className='link' id='tweet-quote' href={url} target='_blank'><i className='fab fa-twitter' /> Twitter</a></button>
        <button onClick={this.rand} className={button} id='new-quote'>Next Quote</button></div>
        </div>
        <p className='last'> - By John </p>
      </div>
   
    )
  }
}


ReactDOM.render(<Main />, document.getElementById('root'));
