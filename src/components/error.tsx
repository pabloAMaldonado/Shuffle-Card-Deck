
const ErrorCompo = ({ errorMsg }: { errorMsg: string }) => {

    return (
        <div id='errorCompo'>
            <p>{ errorMsg }</p>
        </div>
    )
}

export default ErrorCompo
