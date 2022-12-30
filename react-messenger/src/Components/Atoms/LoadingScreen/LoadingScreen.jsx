const LoadingCurve = () => {
    return <span className='face'><span className='circle'/></span>

}

export const LoadingScreen = () => {
    return (
        <div className='loader'>
            <LoadingCurve/>
            <LoadingCurve/>
            <LoadingCurve/>
        </div>
    )
}
