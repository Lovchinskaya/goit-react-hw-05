import css from '../NotFoundPage/NotFoundPage.module.css'

export default function (){
    return (
        <div className={css.container}>
            <span className={css.error}>404</span>
            <span className={css.error}>Sorry, there is no such page</span>
        </div>
    )
}