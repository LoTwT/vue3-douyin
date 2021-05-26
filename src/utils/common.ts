import { apikey } from "../axios"

// 获取视频
export function getVideo(videoName: string) {
    return `${videoName}?apikey=${apikey}`
}