
/**添加公司信息校验标示位*/

$(document).ready(function(){
	//编辑公司信息时从数据库读取省份信息放入隐藏域，将其value与列表中option的值逐个匹配，然后定位到相应option
	var str = $('#company_province').val();
	var select = $('#province').get(0);
	if(str!=''&&str!=null){

		for(i=1;i<select.options.length;i++){
			if(select.options[i].value==str){
				select.selectedIndex=i;					
			}
		}								

		//定位省份后，取得对应的城市列表
		var cityList = new Array();   
		//为数组赋值。每个单元格可以是数组。  
		cityList[0]=['东城区','西城区','崇文区','宣武区','朝阳区','海淀区','丰台区','石景山区','房山区','通州区','顺义区','大兴区','昌平区','平谷区','怀柔区','门头沟区','密云县','延庆县'];   
		cityList[1]=['黄浦区','卢湾区','徐汇区','长宁区','静安区','闸北区','虹口区','杨浦区','闵行区','宝山区','嘉定区','浦东新区','金山区','松江区','青浦区','南汇区','奉贤区','崇明县','普陀区'];
		cityList[2] = ['和平区','河东区','河西区','南开区','河北区','红桥区','塘沽区','汉沽区','大港区','东丽区','西青区','津南区','北辰区','武清区','宝坻区','宁河县','静海县','蓟县'];
		cityList[3] = ['渝中区','大渡口区','江北区','九龙坡区','南岸区','万州区','涪陵区','沙坪坝区','北碚区','万盛区','双桥区','渝北区','巴南区','黔江区','长寿区','江津区','合川区','永川区','南川区','綦江县','潼南县','铜梁县','大足县','荣昌县','璧山县','梁平县','城口县','丰都县','垫江县','武隆县','忠县','开县','云阳县','奉节县','巫山县','巫溪县','石柱土家族自治县','秀山土家族苗族自治县','酉阳土家族苗族自治县','彭水苗族土家族自治县'];
		cityList[4] = ['石家庄', '唐山' ,'秦皇岛', '邯郸','邢台','保定', '张家口', '承德', '沧州', '廊坊', '衡水'];
		cityList[5] = ['太原','大同', '阳泉', '长治', '晋城', '朔州', '晋中', '运城', '忻州', '临汾', '吕梁'];
		cityList[6] = ['呼和浩特', '包头', '乌海', '赤峰', '通辽', '鄂尔多斯', '呼伦贝尔', '巴彦淖尔', '乌兰察布', '兴安', '锡林郭勒', '阿拉善'];
		cityList[7] = ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '盘锦', '铁岭', '朝阳', '葫芦岛'];
		cityList[8] = ['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边'];
		cityList[9] = ['哈尔滨', '齐齐哈尔', '鸡西', '鹤岗', '双鸭山', '大庆', '伊春', '佳木斯', '七台河', '牡丹江', '黑河', '绥化', '大兴安岭'];
		cityList[10] = ['南京', '无锡', '徐州', '常州', '苏州', '南通', '连云港', '淮安', '盐城', '扬州', '镇江', '泰州', '宿迁'];
		cityList[11] = ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'];
		cityList[12] = ['合肥', '芜湖', '蚌埠', '淮南', '马鞍山', '淮北', '铜陵', '安庆', '黄山', '滁州', '阜阳', '宿州', '巢湖', '六安', '亳州', '池州', '宣城'];
		cityList[13] = ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德'];
		cityList[14] = ['南昌', '景德镇', '萍乡', '九江', '新余', '鹰潭', '赣州', '吉安', '宜春', '抚州', '上饶'];
		cityList[15] = ['济南市', '青岛市', '淄博市', '枣庄市', '东营市', '烟台市', '潍坊市', '威海市', '济宁市', '泰安市', '日照市', '莱芜市', '临沂市', '德州市', '聊城市', '滨州市', '菏泽市'];
		cityList[16] = ['郑州', '开封', '洛阳', '平顶山', '焦作', '鹤壁', '新乡', '安阳', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '信阳', '周口', '驻马店'];
		cityList[17] = ['武汉', '黄石', '襄樊', '十堰', '荆州', '宜昌', '荆门', '鄂州', '孝感', '黄冈', '咸宁', '随州', '恩施'];
		cityList[18] = ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西'];
		cityList[19] = ['广州', '深圳', '珠海', '汕头', '韶关', '佛山', '江门', '湛江', '茂名', '肇庆', '惠州', '梅州', '汕尾', '河源', '阳江', '清远', '东莞', '中山', '潮州', '揭阳', '云浮'];
		cityList[20] = ['南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '百色', '贺州', '河池', '来宾', '崇左'];
		cityList[21] = ['海口', '三亚'];
		cityList[22] = ['成都市', '自贡市', '攀枝花', '泸州市' ,'德阳市', '绵阳市', '广元市', '遂宁市', '内江市', '乐山市', '南充市', '宜宾市', '广安市', '达州市', '眉山市', '雅安市'];
		cityList[23] = ['贵阳', '六盘水', '遵义','安顺', '铜仁', '毕节', '黔西南', '黔东南', '黔南'];
		cityList[24] = ['昆明', '曲靖', '玉溪', '保山', '昭通', '丽江', '普洱', '临沧', '文山', '红河', '西双版纳', '楚雄', '大理', '德宏', '怒江', '迪庆'];
		cityList[25] = ['拉萨', '昌都', '山南', '日喀则', '那曲', '阿里', '林芝'];
		cityList[26] = ['西安', '铜川', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '安康', '商洛'];
		cityList[27] = ['兰州', '嘉峪关', '金昌', '白银', '天水', '武威', '张掖', '平凉', '酒泉', '庆阳', '定西', '陇南', '临夏', '甘南'];
		cityList[28] = ['西宁', '海东', '海北', '黄南', '海南', '果洛', '玉树', '海西'];
		cityList[29] = ['银川', '石嘴山', '吴忠', '固原', '中卫'];
		cityList[30] = ['乌鲁木齐', '克拉玛依', '吐鲁番', '哈密', '和田', '阿克苏', '喀什', '克孜勒苏柯尔克孜', '巴音郭楞蒙古', '昌吉', '博尔塔拉蒙古', '伊犁哈萨克', '塔城', '阿勒泰'];
		cityList[31] = ['香港', '澳门', '台湾']; 

		var pIndex=document.all.province.selectedIndex-1;    
		var newOption1;   
		document.all.city.options.length=0;   
		for (var j in cityList[pIndex]){   
			newOption1=new Option(cityList[pIndex][j]);    
			document.all.city.options.add(newOption1);   
		} 

		//从得到的城市列表中定位从隐藏域中得到的公司所属城市信息
		var str1 = $('#company_city').val();
		$("#city").val(str1);
	} 

});	



//对省份进行改动时取得对应的城市列表
function changeCity(){   
	//创建数组，可以不指定大小    
	var cityList = new Array();   
	//为数组赋值。每个单元格可以是数组    
	cityList[0]=['东城区','西城区','崇文区','宣武区','朝阳区','海淀区','丰台区','石景山区','房山区','通州区','顺义区','大兴区','昌平区','平谷区','怀柔区','门头沟区','密云县','延庆县'];   
	cityList[1]=['黄浦区','卢湾区','徐汇区','长宁区','静安区','闸北区','虹口区','杨浦区','闵行区','宝山区','嘉定区','浦东新区','金山区','松江区','青浦区','南汇区','奉贤区','崇明县','普陀区'];
	cityList[2] = ['和平区','河东区','河西区','南开区','河北区','红桥区','塘沽区','汉沽区','大港区','东丽区','西青区','津南区','北辰区','武清区','宝坻区','宁河县','静海县','蓟县'];
	cityList[3] = ['渝中区','大渡口区','江北区','九龙坡区','南岸区','万州区','涪陵区','沙坪坝区','北碚区','万盛区','双桥区','渝北区','巴南区','黔江区','长寿区','江津区','合川区','永川区','南川区','綦江县','潼南县','铜梁县','大足县','荣昌县','璧山县','梁平县','城口县','丰都县','垫江县','武隆县','忠县','开县','云阳县','奉节县','巫山县','巫溪县','石柱土家族自治县','秀山土家族苗族自治县','酉阳土家族苗族自治县','彭水苗族土家族自治县'];
	cityList[4] = ['石家庄', '唐山' ,'秦皇岛', '邯郸','邢台','保定', '张家口', '承德', '沧州', '廊坊', '衡水'];
	cityList[5] = ['太原','大同', '阳泉', '长治', '晋城', '朔州', '晋中', '运城', '忻州', '临汾', '吕梁'];
	cityList[6] = ['呼和浩特', '包头', '乌海', '赤峰', '通辽', '鄂尔多斯', '呼伦贝尔', '巴彦淖尔', '乌兰察布', '兴安', '锡林郭勒', '阿拉善'];
	cityList[7] = ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '盘锦', '铁岭', '朝阳', '葫芦岛'];
	cityList[8] = ['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边'];
	cityList[9] = ['哈尔滨', '齐齐哈尔', '鸡西', '鹤岗', '双鸭山', '大庆', '伊春', '佳木斯', '七台河', '牡丹江', '黑河', '绥化', '大兴安岭'];
	cityList[10] = ['南京', '无锡', '徐州', '常州', '苏州', '南通', '连云港', '淮安', '盐城', '扬州', '镇江', '泰州', '宿迁'];
	cityList[11] = ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'];
	cityList[12] = ['合肥', '芜湖', '蚌埠', '淮南', '马鞍山', '淮北', '铜陵', '安庆', '黄山', '滁州', '阜阳', '宿州', '巢湖', '六安', '亳州', '池州', '宣城'];
	cityList[13] = ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德'];
	cityList[14] = ['南昌', '景德镇', '萍乡', '九江', '新余', '鹰潭', '赣州', '吉安', '宜春', '抚州', '上饶'];
	cityList[15] = ['济南市', '青岛市', '淄博市', '枣庄市', '东营市', '烟台市', '潍坊市', '威海市', '济宁市', '泰安市', '日照市', '莱芜市', '临沂市', '德州市', '聊城市', '滨州市', '菏泽市'];
	cityList[16] = ['郑州', '开封', '洛阳', '平顶山', '焦作', '鹤壁', '新乡', '安阳', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '信阳', '周口', '驻马店'];
	cityList[17] = ['武汉', '黄石', '襄樊', '十堰', '荆州', '宜昌', '荆门', '鄂州', '孝感', '黄冈', '咸宁', '随州', '恩施'];
	cityList[18] = ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西'];
	cityList[19] = ['广州', '深圳', '珠海', '汕头', '韶关', '佛山', '江门', '湛江', '茂名', '肇庆', '惠州', '梅州', '汕尾', '河源', '阳江', '清远', '东莞', '中山', '潮州', '揭阳', '云浮'];
	cityList[20] = ['南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '百色', '贺州', '河池', '来宾', '崇左'];
	cityList[21] = ['海口', '三亚'];
	cityList[22] = ['成都市', '自贡市', '攀枝花', '泸州市' ,'德阳市', '绵阳市', '广元市', '遂宁市', '内江市', '乐山市', '南充市', '宜宾市', '广安市', '达州市', '眉山市', '雅安市'];
	cityList[23] = ['贵阳', '六盘水', '遵义','安顺', '铜仁', '毕节', '黔西南', '黔东南', '黔南'];
	cityList[24] = ['昆明', '曲靖', '玉溪', '保山', '昭通', '丽江', '普洱', '临沧', '文山', '红河', '西双版纳', '楚雄', '大理', '德宏', '怒江', '迪庆'];
	cityList[25] = ['拉萨', '昌都', '山南', '日喀则', '那曲', '阿里', '林芝'];
	cityList[26] = ['西安', '铜川', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '安康', '商洛'];
	cityList[27] = ['兰州', '嘉峪关', '金昌', '白银', '天水', '武威', '张掖', '平凉', '酒泉', '庆阳', '定西', '陇南', '临夏', '甘南'];
	cityList[28] = ['西宁', '海东', '海北', '黄南', '海南', '果洛', '玉树', '海西'];
	cityList[29] = ['银川', '石嘴山', '吴忠', '固原', '中卫'];
	cityList[30] = ['乌鲁木齐', '克拉玛依', '吐鲁番', '哈密', '和田', '阿克苏', '喀什', '克孜勒苏柯尔克孜', '巴音郭楞蒙古', '昌吉', '博尔塔拉蒙古', '伊犁哈萨克', '塔城', '阿勒泰'];
	cityList[31] = ['香港', '澳门', '台湾']; 

	var pIndex=document.all.province.selectedIndex-1;    
	var newOption1;   
	document.all.city.options.length=0;   
	for (var j in cityList[pIndex]){   
		newOption1=new Option(cityList[pIndex][j]);    
		document.all.city.options.add(newOption1);   
	} 
}    


function send(){
	 var successFlag = "1";  //默认成功 
	 $("input").each(function(){
		 if(typeof($(this).attr("checkKey"))=="undefined"){
			 //alert("不包含checkKey");
		 }else{
			 if(!checkField(this)){
				 successFlag = "0";
				 //return false;
			 }
		 }
	 } );
	 $("select").each(function(){
		 if(typeof($(this).attr("checkKey"))=="undefined"){
			 //alert("不包含checkKey");
		 }else{
			 if(!checkField(this)){
				 successFlag = "0";
				 //return false;
			 }
		 }
	 } );
	 //所有校验通过 提交表单
	 if(successFlag == 1){
		 companyForm.submit();
	 }
}


