/*
 * @Descripttion: 
 * @version: 
 * @Author: ShiJingWei
 * @Date: 2020-03-11 11:11:58
 * @LastEditors: ShiJingWei
 * @LastEditTime: 2020-03-12 17:36:10
 */
import React, { useState, useEffect } from 'react'
import {Input} from 'antd';

function App(props) {
	return(
		<Input addonBefore="名称" defaultValue="demo" style={{width:'300px'}}/>
	)
}

export default App;