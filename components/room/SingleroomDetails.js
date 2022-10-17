import { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import { Galleria } from 'primereact/galleria';
import { Dropdown } from 'primereact/dropdown';
import singleroomStyle from '../../styles/SingleroomDetails.module.css';
import AroundHotel from './AroundHotel';
import Reviews from '../Reviews/Reviews';
import RoomCard from './RoomCard';
const SingleroomDetails = ({ singleRoom }) => {
  // GALLERIES
  const [images, setImages] = useState(singleRoom?.roomImages);
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
  //     galleriaService.getImages().then(singleRoom? => setImages(singleRoom?));
  // }, []);
  // eslint-disable-line react-hooks/exhaustive-deps
  // useEffect(() => {
  //     galleriaService.getImages().then(singleRoom? => setImages(singleRoom?));
  // }, []); 
  // eslint-disable-line react-hooks/exhaustive-deps

  const itemTemplate = (card) => {
    return <img className={`${singleroomStyle.gallary_view_img}`} src={card} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={card} style={{ width: '100%', display: 'block' }} />
  }
  const thumbnailTemplate = (card) => {
    return <img className={`${singleroomStyle.gallary_bottom_view_img} gallary_bottom`} src={card} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={card} style={{ width: '100%', display: 'block' }} />
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
    <div className={singleroomStyle.singleroom_container}>
      <div className={`${singleroomStyle.singleroom_booking_container}`}>
        <div className={`${singleroomStyle.singleroom_booking_sub_container} `}>
          <div className={`${singleroomStyle.singleroom_galleria_container} galleriThumbnail `}>
            <Galleria className={`${singleroomStyle.singleroom_galleria}`} value={images} responsiveOptions={responsiveOptions} numVisible={5} circular
              item={itemTemplate} thumbnail={thumbnailTemplate} />
          </div>
          <div className={`${singleroomStyle.skr_sort_des} `}>
            <h2>Sagor konna resort is waiting for you!</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, alias fuga laborum aut quibusdam odit facilis soluta eaque eveniet consequuntur reiciendis necessitatibus sint atque aliquam officia  </p>
          </div>
          <div className={`${singleroomStyle.skr_map_iframe} `}>
            <h2>Location</h2>
            <iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Sagorkonna%20Resort%20Ltd,Kuakata%20Parjatan%20Area,%20Kolapara,%20Patuakhali,%20Bangladesh.&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" />
          </div>
          <h2 className={singleroomStyle.skr_amenity_txt}>Amenity</h2>
          <div className={`${singleroomStyle.skr_amenity_Item}  `}>
            {singleRoom?.airCondition && (
              <div className={`${singleroomStyle.skr_amenity_air_condition} `}>
                <span className={`${singleroomStyle.air_condition_icon} material-icons-sharp`}>
                  {singleRoom?.airCondition}
                </span>
                <h2>Air-conditioned</h2>
              </div>
            )
            }
            {singleRoom?.breakfast && (
              <div className={`${singleroomStyle.skr_amenity_breakfast} `}>
                <span className={`${singleroomStyle.breakfast_icon} material-icons-sharp `}>
                  {singleRoom?.breakfast}
                </span>
                <h2>Free Breakfast</h2>
              </div>
            )
            }
            <div className={`${singleroomStyle.skr_amenity_under_protection} `}>
              <span className={`${singleroomStyle.video_icon} material-icons-sharp`}>
                videocam
              </span>
              <h2>Under protection</h2>
            </div>
            <div className={`${singleroomStyle.skr_amenity_wifi} `}>
              <span className={`${singleroomStyle.wifi_icon} material-icons-sharp`}>
                wifi
              </span>
              <h2>Free Wifi</h2>
            </div>
            <div className={`${singleroomStyle.skr_amenity_tv} `}>
              <span className={`${singleroomStyle.tv_icon} material-icons-sharp`}>
                tv
              </span>
              <h2>TV</h2>
            </div>
          </div>
          <AroundHotel />
          <Reviews />
        </div>
        <div className={`${singleroomStyle.booking_details}`}>
          <div className={`${singleroomStyle.booking_sticky}`}>
            <div className={singleroomStyle.room_idea}>
              <div className={`${singleroomStyle.bed}`}>
                <span className={`${singleroomStyle.bed_icon} material-icons-sharp`}>
                  bed
                </span>
                <p>{singleRoom?.count}
                  <span> Guests</span>
                </p>
              </div>
              <div className={`${singleroomStyle.measure}`}>
                <span className={`${singleroomStyle.measure_icon} material-icons-sharp`}>
                  crop_square
                </span>
                <p>{singleRoom?.feet}
                  <span> Ft²</span>
                </p>
              </div>
            </div>
            <div className={`${singleroomStyle.booking}`}>
              <div className={`${singleroomStyle.booking_price}`}>
                <h1>TK {singleRoom?.price}</h1>
                <span>/night</span>
              </div>
              <button className={`${singleroomStyle.reservation_btn} `}>Reservation</button>
            </div>
            <div className={singleroomStyle.booking_info}>
              <div className="calender">
                <div className={`${singleroomStyle.check_in} calendarFieldCustomBg field col-12 md:col-4`}>
                  <label htmlFor="Check in">Check in</label>
                  <Calendar id="checkin" value={checkin} onChange={(e) => setCheckin(e.value)} showIcon placeholder='Select date' />
                </div>
                <div className={`${singleroomStyle.check_out} calendarFieldCustomBg  field col-12 md:col-4`} >
                  <label htmlFor="Check out">Check out</label>
                  <Calendar id="checkout" className='width: 100%;' value={checkout} onChange={(e) => setCheckout(e.value)} showIcon placeholder='Select date' />
                </div>
              </div>
              <div className={`${singleroomStyle.guest_count} grid`}>
                <div className={`${singleroomStyle.adult_count} adult_count_dropdown lg:col-6`}>
                  <h5>Person</h5>
                  <Dropdown className={`${singleroomStyle.guest_count_drop}`} value={person} options={items} onChange={countPerson} virtualScrollerOptions={{ itemSize: 38 }} placeholder={person} />
                </div>
                <div className={`${singleroomStyle.children_count} children_count_dropdown lg:col-6`}>
                  <h5>Children</h5>
                  <Dropdown className={`${singleroomStyle.guest_count_drop}`} value={children} options={items} onChange={countChildren} virtualScrollerOptions={{ itemSize: 38 }} placeholder={children} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div className={`${singleroomStyle.similar_room_container}`} >
        <div className={`${singleroomStyle.similar_room}`}>
          <h3>Similar Rooms</h3>
          <p>Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit ea delectus, sed voluptatem. Laborum accusantium libero commodi id officiis itaque esse adipisci, necessitatibus asperiores, illo odio.</p>
        </div>
        <div className={`${singleroomStyle.similar_room_btn}`}>
          <button >All rooms</button>
        </div>
        <RoomCard data={singleRoom?.similarRoom} />
      </div>
    </div >
  )
}
export default SingleroomDetails;
