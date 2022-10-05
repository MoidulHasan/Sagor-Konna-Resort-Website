import { useState } from 'react';
import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import { Galleria } from 'primereact/galleria';
import { Dropdown } from 'primereact/dropdown';
import singleRoom from '../../styles/SingleroomDetails.module.css';
import utilStyles from '../../styles/utils.module.css'
const SingleroomDetails = ({ singleCard }) => {
  // GALLERIES
  const [images, setImages] = useState(singleCard?.roomImages);
  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  // useEffect(() => {
  //     galleriaService.getImages().then(singleCard => setImages(singleCard));
  // }, []);
  // eslint-disable-line react-hooks/exhaustive-deps
  // useEffect(() => {
  //     galleriaService.getImages().then(singleCard => setImages(singleCard));
  // }, []); 
  // eslint-disable-line react-hooks/exhaustive-deps

  const itemTemplate = (card) => {
    return <img className={`${singleRoom.gallary_view_img}`} src={card} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={card} style={{ width: '100%', display: 'block' }} />
  }
  const thumbnailTemplate = (card) => {
    return <img className={`${singleRoom.gallary_bottom_view_img} gallary_bottom`} src={card} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={card} style={{ width: '100%', display: 'block' }} />
  }
  // CALENDER 
  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let prevMonth = (month === 0) ? 11 : month - 1;
  let prevYear = (prevMonth === 11) ? year - 1 : year;
  let nextMonth = (month === 11) ? 0 : month + 1;
  let nextYear = (nextMonth === 0) ? year + 1 : year;

  const [checkin, setCheckin] = useState(null);
  const [checkout, setCheckout] = useState(null);
  let minDate = new Date();
  minDate.setMonth(prevMonth);
  minDate.setFullYear(prevYear);
  let maxDate = new Date();
  maxDate.setMonth(nextMonth);
  maxDate.setFullYear(nextYear);
  addLocale('es', {
    firstDayOfWeek: 1,
    dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    today: 'Hoy',
    clear: 'Limpiar'
  });

  const dateTemplate = (date) => {
    if (date.day > 10 && date.day < 15) {
      return (
        <strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>
      );
    }

    return date.day;
  }
  // SELECT DAY 
  const items = Array.from({ length: 10 }).map((_, i) => ({ label: `${i}`, value: i }));
  const [person, setPerson] = useState(2);
  const [children, setChildren] = useState(1);

  const countPerson = (e) => {
    setPerson(e.value);
  }
  const countChildren = (e) => {
    setChildren(e.value);
  }
  return (
    <div className={singleRoom.singleroom_container}>
      <div className={`${singleRoom.singleroom_booking_container}  grid  `}>
        <div className={`${singleRoom.singleroom_galleria_container} galleriThumbnail col lg:col-8`}>
          <Galleria className={`${singleRoom.singleroom_galleria}`} value={images} responsiveOptions={responsiveOptions} numVisible={5} circular
            item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
        <div className={`${singleRoom.booking_details} col lg:col-4`}>
          <div className={singleRoom.room_idea}>
            <div className={`${singleRoom.bed}`}>
              <span className={`${singleRoom.bed_icon} material-icons-sharp`}>
                bed
              </span>
              <p>{singleCard.count}
                <span> Guests</span>
              </p>
            </div>
            <div className={`${singleRoom.measure}`}>
              <span className={`${singleRoom.measure_icon} material-icons-sharp`}>
                crop_square
              </span>
              <p>{singleCard.feet}
                <span> Ft²</span>
              </p>
            </div>
          </div>
          <div className={`${singleRoom.booking}`}>
            <div className={`${singleRoom.booking_price}`}>
              <h1>TK {singleCard.price}</h1>
              <span>/night</span>
            </div>
            <button className={`${singleRoom.reservation_btn} `}>Reservation</button>
          </div>
          <div className={singleRoom.booking_info}>
            <div className="calender">
              <div className={`${singleRoom.check_in} calendarFieldCustomBg field col-12 md:col-4`}>
                <label htmlFor="Check in">Check in</label>
                <Calendar id="checkin" value={checkin} onChange={(e) => setCheckin(e.value)} showIcon placeholder='Select date' />
              </div>
              <div className={`${singleRoom.check_out} calendarFieldCustomBg  field col-12 md:col-4`} >
                <label htmlFor="Check out">Check out</label>
                <Calendar id="checkout" className='width: 100%;' value={checkout} onChange={(e) => setCheckout(e.value)} showIcon placeholder='Select date' />
              </div>
            </div>
            <div className={`${singleRoom.guest_count} grid`}>
              <div className={`${singleRoom.adult_count} adult_count_dropdown lg:col-6`}>
                <h5>Person</h5>
                <Dropdown value={person} options={items} onChange={countPerson} virtualScrollerOptions={{ itemSize: 38 }} placeholder={person} />
              </div>
              <div className={`${singleRoom.children_count} children_count_dropdown lg:col-6`}>
                <h5>Children</h5>
                <Dropdown value={children} options={items} onChange={countChildren} virtualScrollerOptions={{ itemSize: 38 }} placeholder={children} />
              </div>
            </div>
          </div>
        </div>
      </div >
      <div className={`${singleRoom.skr_text} grid`}>
        <div className={`${singleRoom.skr_sort_des} lg:col-8`}>
          <h2>Sagor konna resort is waiting for you</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, alias fuga laborum aut quibusdam odit facilis soluta eaque eveniet consequuntur reiciendis necessitatibus sint atque aliquam officia voluptatibus suscipit minima quod culpa delectus excepturi! Repudiandae sed culpa dolore ab esse, quaerat voluptatem distinctio debitis temporibus reprehenderit officia voluptas hic sint alias dignissimos maiores. Facilis modi qui voluptates iusto vitae excepturi iste.</p>
        </div>
      </div>
      <div className={`${singleRoom.skr_map} grid`}>
        <div className={`${singleRoom.skr_map_iframe} lg:col-8`}>
          <h2>Location</h2>
          <iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Sagorkonna%20Resort%20Ltd,Kuakata%20Parjatan%20Area,%20Kolapara,%20Patuakhali,%20Bangladesh.&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" />
        </div>
      </div>
      <h2 className={singleRoom.skr_amenity_txt}>Amenity</h2>
      <div className={`${singleRoom.skr_amenity} grid`}>
        <div className={`${singleRoom.skr_amenity_Item} lg:col-8`}>
          {singleCard.airCondition && (
            <div className={`${singleRoom.skr_amenity_air_condition} `}>
              <span className={`${singleRoom.air_condition_icon} material-icons-sharp`}>
                {singleCard.airCondition}
              </span>
              <h2>Air-conditioned</h2>
            </div>
          )
          }
          {singleCard.breakfast && (
            <div className={`${singleRoom.skr_amenity_breakfast} `}>
              <span className={`${singleRoom.breakfast_icon} material-icons-sharp `}>
                {singleCard.breakfast}
              </span>
              <h2>Free Breakfast</h2>
            </div>
          )
          }
          <div className={`${singleRoom.skr_amenity_under_protection} `}>
            <span className={`${singleRoom.video_icon} material-icons-sharp`}>
              videocam
            </span>
            <h2>Under protection</h2>
          </div>
          <div className={`${singleRoom.skr_amenity_wifi} `}>
            <span className={`${singleRoom.wifi_icon} material-icons-sharp`}>
              wifi
            </span>
            <h2>Free Wifi</h2>
          </div>
          <div className={`${singleRoom.skr_amenity_tv} `}>
            <span className={`${singleRoom.tv_icon} material-icons-sharp`}>
              tv
            </span>
            <h2>TV</h2>
          </div>
        </div>
      </div>
      <div className={singleRoom.aroundHotel}>

      </div>
    </div >
  )
}


export default SingleroomDetails;
