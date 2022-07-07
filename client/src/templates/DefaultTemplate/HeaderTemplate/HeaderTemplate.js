import React from 'react'
import './HeaderTemplate.scss'

export default function HeaderTemplate() {
  return (
    <div className='header_container' >
      <div className='header'>
        <ul className='header_menu'>
          <li><a href="">Mua Vé</a></li>
          <li><a href="">Phim <svg className='svg_menu' width="24" height="24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg></a></li>
          <li><a href="">Rạp <svg className='svg_menu' width="24" height="24" ><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg></a></li>
          <li><a href="">Tin Tức <svg className='svg_menu' width="24" height="24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg></a></li>
          <li><a href="">Tv Series</a></li>
          <li><a href="">Sự Kiện</a></li>
          <li><a href="">Cộng Đồng</a></li>
        </ul>
        <div className='header_logo'>
          <img width={92} heigh={24} src="https://moveek.com/bundles/ornweb/img/logo.png" alt="Logo" />
        </div>
        <div className='header_right'>
        <form className='header_form'>
          <div className='header_form_container'>
            <input type="text" placeholder='Từ khóa tìm kiếm...' />
            <div>
            <svg width="24" height="24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
            </div>
          </div>
        </form>
        <div className='language'>
          VI
        </div>
        <div className='svg'>
        <svg className='sgv' width="24" height="24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
        </div>
        <div className='svg'>
        <svg className='sgv' width="24" height="24"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
        {/* <img className='img_ava' src='https://i.imgur.com/vfe2r7V.jpeg' /> */}
        </div>
        </div>
      </div>
    </div>
  )
}
