import { useRouter } from 'next/router'
function roomDetail() {
    const router = useRouter()
    const roomId = router.query.roomId
    return <h1>Room {roomId}</h1>
}
export default roomDetail
