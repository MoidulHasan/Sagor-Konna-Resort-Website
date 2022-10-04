import { useState } from 'react';
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
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];


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
        <div className={`${singleRoom.singleroom_container}  grid  `}>
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
    )
}

export default SingleroomDetails