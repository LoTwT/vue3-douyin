import { apikey } from "../axios"

// 获取视频
export function getResource(videoName: string) {
    return `${videoName}?apikey=${apikey}`
}