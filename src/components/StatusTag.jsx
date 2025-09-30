import STATUS from "../constants/ApplicationStatus"

export default function StatusTag({ status }) {
    const Icon = STATUS[status].icon;

    return (
        <figure className="StatusTag"
            style={{
                backgroundColor: STATUS[status].bgColor,
                color: STATUS[status].fontColor,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.25em",
                padding: "0.25em 0.5em",
                borderRadius: "0.5em",
                whiteSpace: "nowrap",
            }}
        >
            <Icon fontSize="small"></Icon>
            <span className="Label">
                {STATUS[status].name}
            </span>
        </figure>
    )
}