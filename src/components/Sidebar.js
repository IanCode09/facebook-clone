import React from 'react'
import '../css/Sidebar.css'
import SidebarRow from './SidebarRow'
import {
    LocalHospital,
    EmojiFlags,
    People,
    Chat,
    Storefront,
    VideoLibrary,
    ExpandMoreOutlined
} from '@material-ui/icons'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow 
                src="https://avatars0.githubusercontent.com/u/69780199?s=460&u=3940fd45951e75044f959991d0107ee212d42207&v=4"
                title="Ian Lombu"
            />

            <SidebarRow
                Icon={LocalHospital}
                title="COVID-19 Information Center"
            />

            <SidebarRow Icon={EmojiFlags} title="Pages" />
            <SidebarRow Icon={People} title="Friends" />
            <SidebarRow Icon={Chat} title="Messenger" />
            <SidebarRow Icon={Storefront} title="Marketplace" />
            <SidebarRow Icon={VideoLibrary} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
        </div>
    )
}

export default Sidebar
