

export default function MapEmbed() {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d61791.87528670103!2d121.061376!3d14.5424384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1758864976480!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}