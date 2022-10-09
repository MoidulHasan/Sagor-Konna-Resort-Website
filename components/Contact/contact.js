import contactStyle from '../../styles/contact.module.css'
const Contact = () => {
    return (
        <div className={`${contactStyle.contact_container} `}>
            <div className={`${contactStyle.contact_text} p-container`}>
                <h1>Get in Touch</h1>
                <p>
                    Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit ea delectus, sed voluptatem. Laborum accusantium libero commodi id officiis itaque esse adipisci, necessitatibus asperiores, illo odio.
                </p>
            </div>
            <div className={`${contactStyle.contact_box}`}>
                <div className={`${contactStyle.contact_flex} p-container `}>
                    <div  >
                        <span class="material-icons-sharp">
                            pin_drop
                        </span>
                        <h3>Welcome</h3>
                        <p>Sagor Konna Resort ltd, Kuakata</p>
                    </div>
                    <div>
                        <span class="material-icons-sharp">
                            call
                        </span>
                        <h3>Call</h3>
                        <p>+93 (736) 6X8 84 84</p>
                    </div>
                    <div>
                        <span class="material-icons-sharp">
                            mail
                        </span>
                        <h3>Write</h3>
                        <p>kinsley.inbox@mail.com</p>
                    </div>
                </div>
                <span className={`${contactStyle.contact_hr}`} />
            </div>
            <div className={`${contactStyle.contact_lotcation_txt} p-container`}>
                <h2>Location</h2>
            </div>
            <div className={`${contactStyle.contact_map_iframe} p-container`}>
                <iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Sagorkonna%20Resort%20Ltd,Kuakata%20Parjatan%20Area,%20Kolapara,%20Patuakhali,%20Bangladesh.&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" />
            </div>
        </div>
    )
}

export default Contact