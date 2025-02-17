import '../../styles/page-sections/ThreeColumns.css'

export default function ThreeColumns({ title = "", column1, column2, column3 }) {
    return (
        <section className="ThreeColumns">
            {title !== "" && <h1 className="SectionTitle">{title}</h1>}
            <main className="ColumnContainer">
                {column1}
                {column2}
                {column3}
            </main>
        </section>
    )
}