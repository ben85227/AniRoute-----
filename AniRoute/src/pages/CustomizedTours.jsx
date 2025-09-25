import React, { useState } from 'react';
import '../scss/CustomizedTours.scss';

const CustomizedTours = () => {
    // 表單狀態管理
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        phone: '',
        lineId: '',
        availableTime: '',
        departure: '',
        region: '',
        numberOfPeople: '',
        departureDate: '',
        days: '',
        reference1: '',
        reference2: '',
        request: '',
        message: ''
    });

    // 處理輸入變更
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // 處理表單提交
    const handleSubmit = () => {
        console.log('表單數據:', formData);
        alert('表單已提交（僅為示意功能）');
    };

    return (
        <div className="customized-tours">
            {/* 頁面橫幅區域 */}
            <div className="banner">
                <div className="square-box">
                        <div className="title-section">
                            <h2 className="chinese-title">量身訂製</h2>
                            <h3 className="english-title">Customized Tours</h3>
                    </div>
                </div>
            </div>

            <div className="main-content">
                {/* 介紹區域 */}
                <div className="intro-section">
                    <div className="intro-container">
                        <div className="text-content">
                            <p>
                                無論您已經有心中嚮往的巡禮行程，或是希望獲得專業的規劃建議，
                                我們都誠摯邀請您與我們聯繫。
                                我們將仔細傾聽您的需求，為您打造最符合期待的專屬動漫巡禮體驗。
                            </p>
                            <p>
                                聯繫方式：
                                📞 (+886) 02-6666-6666 <br />
                                <a href="mailto:service@safetravel.com">service@AniRoute.com</a>
                            </p>
                            <div className="line-button">
                                <div>
                                    LINE
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgMTJIMTlNMTkgMTJMMTMgNk0xOSAxMkwxMyAxOCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" alt="箭頭" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 表單區域 */}
                <div className="form-section">
                    <div className="customized-form">
                        <p className="required-notice">「<span>*</span>」為必填</p>

                        <div className="form-row">
                            {/* 姓名欄位 */}
                            <div className="input-half">
                                <label htmlFor="userName">姓名 <span>*</span></label>
                                <input
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    value={formData.userName}
                                    onChange={handleInputChange}
                                    placeholder="請輸入姓名"
                                />
                            </div>

                            {/* Email欄位 */}
                            <div className="input-half">
                                <label htmlFor="email">Email <span>*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="請輸入 Email"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            {/* 電話欄位 */}
                            <div className="input-half">
                                <label htmlFor="phone">手機號碼<span>*</span></label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="0987654321"
                                />
                            </div>

                            {/* LINE ID欄位 */}
                            <div className="input-half">
                                <label htmlFor="lineId">LINE ID</label>
                                <input
                                    type="text"
                                    id="lineId"
                                    name="lineId"
                                    value={formData.lineId}
                                    onChange={handleInputChange}
                                    placeholder="請輸入 LINE ID"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            {/* 方便聯絡時間欄位 */}
                            <div className="input-half">
                                <label htmlFor="availableTime">方便聯絡時間</label>
                                <input
                                    type="text"
                                    id="availableTime"
                                    name="availableTime"
                                    value={formData.availableTime}
                                    onChange={handleInputChange}
                                    placeholder="您可填寫建議時段"
                                />
                            </div>

                            {/* 出發地欄位 */}
                            <div className="input-half">
                                <label htmlFor="departure">出發地 <span>*</span></label>
                                <input
                                    type="text"
                                    id="departure"
                                    name="departure"
                                    value={formData.departure}
                                    onChange={handleInputChange}
                                    placeholder="例：台北／台中／高雄"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            {/* 預計旅遊地區欄位 */}
                            <div className="input-half">
                                <label htmlFor="region">預計旅遊地區 <span>*</span></label>
                                <select
                                    name="region"
                                    id="region"
                                    value={formData.region}
                                    onChange={handleInputChange}
                                >
                                    <option value="">請選擇</option>
                                    <option value="東京">東京</option>
                                    <option value="大阪">大阪</option>
                                    <option value="京都">京都</option>
                                    <option value="尚未確定">尚未確定</option>
                                </select>
                            </div>

                            {/* 預計人數欄位 */}
                            <div className="input-half">
                                <label htmlFor="numberOfPeople">預計人數 <span>*</span></label>
                                <input
                                    type="text"
                                    id="numberOfPeople"
                                    name="numberOfPeople"
                                    value={formData.numberOfPeople}
                                    onChange={handleInputChange}
                                    placeholder="請輸入？大人？小孩"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            {/* 預計出發日欄位 */}
                            <div className="input-half">
                                <label htmlFor="departureDate">預計出發日</label>
                                <input
                                    type="date"
                                    id="departureDate"
                                    name="departureDate"
                                    value={formData.departureDate}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {/* 預計天數欄位 */}
                            <div className="input-half">
                                <label htmlFor="days">預計天數</label>
                                <input
                                    type="number"
                                    id="days"
                                    name="days"
                                    value={formData.days}
                                    onChange={handleInputChange}
                                    placeholder="請輸入數字"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            {/* 參考行程1欄位 */}
                            <div className="input-half">
                                <label htmlFor="reference1">參考動畫 1</label>
                                <select
                                    name="reference1"
                                    id="reference1"
                                    value={formData.reference1}
                                    onChange={handleInputChange}
                                >
                                    <option value="">請選擇</option>
                                    <option value="白箱 劇場版">白箱 劇場版</option>
                                    <option value="魔法禁書目錄">魔法禁書目錄</option>
                                    <option value="孤獨搖滾">孤獨搖滾</option>
                                    <option value="戀上換裝娃娃">戀上換裝娃娃</option>
                                    <option value="JoJo的奇妙冒險 星塵遠征軍">JoJo的奇妙冒險 星塵遠征軍</option>
                                    <option value="命運石之門">命運石之門</option>
                                </select>
                            </div>

                            {/* 參考行程2欄位 */}
                            <div className="input-half">
                                <label htmlFor="reference2">參考動畫 2</label>
                                <select
                                    name="reference2"
                                    id="reference2"
                                    value={formData.reference2}
                                    onChange={handleInputChange}
                                >
                                    <option value="">請選擇</option>
                                    <option value="白箱 劇場版">白箱 劇場版</option>
                                    <option value="魔法禁書目錄">魔法禁書目錄</option>
                                    <option value="孤獨搖滾">孤獨搖滾</option>
                                    <option value="戀上換裝娃娃">戀上換裝娃娃</option>
                                    <option value="JoJo的奇妙冒險 星塵遠征軍">JoJo的奇妙冒險 星塵遠征軍</option>
                                    <option value="命運石之門">命運石之門</option>
                                </select>
                            </div>
                        </div>

                        {/* 其他行程需求欄位 */}
                        <div className="input-full">
                            <label htmlFor="request">其他動漫行程</label>
                            <textarea
                                id="request"
                                name="request"
                                value={formData.request}
                                onChange={handleInputChange}
                                rows="10"
                            />
                        </div>

                        {/* 備註欄位 */}
                        <div className="input-full">
                            <label htmlFor="message">備註</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="10"
                            />
                        </div>

                        {/* 警告聲明 */}
                        <div className="warning">
                            ✽本網站為練習網頁。<br />
                            此表單僅為示意，並無任何後台功能，不具有蒐集個人資料之功能，不具有商業行為，特此申明。
                        </div>

                        {/* 提交按鈕 */}
                        <div className="submit-button-container">
                            <button onClick={handleSubmit} className="submit-button">
                                確認送出
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomizedTours;