import React from 'react'

const GoogleMapEmbed = () => {
  return (
    <div className='mapouter'>
      <div className='gmap_canvas'>
        <iframe
          title='googleMap'
          width='100%'
          height='750'
          id='gmap_canvas'
          src='https://maps.google.com/maps?q=Budapest,%20Szenth%C3%A1roms%C3%A1g%20t%C3%A9r%205&t=&z=11&ie=UTF8&iwloc=&output=embed'
          frameborder='0'
          scrolling='no'
          marginheight='0'
          marginwidth='0'
        ></iframe>
        <br />
        <a href='https://www.embedgooglemap.net'>google maps on web page</a>
      </div>
    </div>
  )
}

export default GoogleMapEmbed
