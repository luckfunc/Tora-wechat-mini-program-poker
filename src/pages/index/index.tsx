import { useState } from 'react';
import { Button, Image, View } from '@tarojs/components';
import Taro, { useLoad } from '@tarojs/taro'
import './index.less'
export default function Index() {
  const [imgUrl, setImgUrl] = useState('https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132');
  useLoad(() => {
    console.log('Page loaded.')
  })
  const handleGetAvatarUrl = async (e) => {
    await Taro.showLoading({
      title: '上传中',
    });
    // 处理经过腾讯审核后返回的 newAvatar
    // 头像是 e.detail.avatarUrl
    // 头像会先上传去腾讯进行审核然后才返回，添加个 loading 体验好点
    Taro.hideLoading();
    setImgUrl(e.detail.avatarUrl)
  }
  return (
    <View className='index'>
      <Button open-type='chooseAvatar' onChooseAvatar={handleGetAvatarUrl} className='avatar-wrapper'>
        <Image className='avatar' src={imgUrl} />
      </Button>
    </View>
  )
}
