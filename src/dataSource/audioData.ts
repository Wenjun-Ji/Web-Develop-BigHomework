import { requireCDN } from "@/utils/handleImg";
const  _requireCDN = (url: string) => requireCDN(url, 'audio')
/**
 * 音频资源
 */
export default {
  'pvz-morning': _requireCDN('pvz-morning.mp3'),
  'pvz-comein': _requireCDN('pvz-comein.mp3'),
  'pvz-dance': _requireCDN('pvz-dance.mp3'),
  'pvz-sound': _requireCDN('pvz-sound.mp3'),
  'pvz-little': _requireCDN('pvz-little.mp3'),
} as {[key in string]: string}