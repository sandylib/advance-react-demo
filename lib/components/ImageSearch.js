// Using the flickr API described here - 
// https://www.flickr.com/services/feeds/docs/photos_public/ - 
// create a micro app that allows a user to search for a tag and show the matching photos.
 
class ImageTagSearch extends React.Component {

  constructor ( props ) {
     super( props );
     this.state = {
       results: [],
       tags: ''
     }
  }

  fetchTags() {
   const url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=' + this.state.tags;
    
    $.ajax({
     url: url,
     dataType: 'jsonp'
   }).then((data) => {
      if(data.items.length > 0)
      {
        this.setState({ results: data.items })
      }
   })
 }
 
 handleInputChange = (event) => {
   this.setState({tags: event.target.value});
   if(this.debounce){
     clearTimeout(this.debounce)
   }
     
   this.debounce = setTimeout(()=>{
     this.fetchTags();
   }, 100);
 }
 
 
 render () {
     return(
         <div className="container">
           <div className='header'>
             <h1 className="my-4 text-center text-lg-left">Image Gallery</h1>
             <div className="sub">Search for your tags...</div>
           </div>
         <div className="inputbar">
           <input placeholder='type your tag.' onChange={this.handleInputChange} />
         </div>
           <div className='result'>{this.state.results.map( (item, i) => {
               if(!item) return
               return <img key={i} src={item.media.m} />
             })}</div>
         </div>
     );
  }
}

React.render( <ImageTagSearch />, document.getElementById( "app" ) );
