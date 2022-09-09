const GROUPS = {
    volume: {
        Milliliter : 1,
        Liter : 1000,
        Centner : 100000 
    },
    length : {
        Millimeter : 1,
        CM : 10,
        Decimeter : 100,
        M : 1000
    },
    time : {
        Second : 1,
        Minute : 60,
        Hours : 3600,
        Days : 86400
    }
}



function init(
    groupSelector = '#group',
    buttonSelector = '#button',
    insizeSelector = '#insize',
    outsizeSelector = '#outsize',
    invalueSelector = '#invalue',
    outvalueSelector = '#outvalue') {

        const $group = document.querySelector(groupSelector)
        const $button = document.querySelector(buttonSelector)
        const $insize = document.querySelector(insizeSelector)
        const $outsize = document.querySelector(outsizeSelector)
        const $invalue = document.querySelector(invalueSelector)
        const $outvalue = document.querySelector(outvalueSelector)


        function initGroup() {
            const selectorGroup = Object.entries(GROUPS[$group.value]) 
            
            $insize.textContent = ''
            $outsize.textContent = ''

            for(let item of selectorGroup) {
                const option = document.createElement('OPTION')
                option.setAttribute('value', item[1])
                option.textContent = item[0]



                $insize.append(option.cloneNode(true))
                $outsize.append(option)
            }
        } 

        for(let groupKey of Object.keys(GROUPS)){
            const option = document.createElement('OPTION')
            option.setAttribute('value', groupKey)
            option.textContent = groupKey

            $group.append(option)

        }


        function convert(){
            const insize = Number($insize.value);
            const outsize = Number($outsize.value);
            const invalue = Number($invalue.value);

            let result = (invalue * insize) / outsize


            $outvalue.value = result;
        }

        $group.addEventListener('change', initGroup)
        $button.addEventListener('click', convert)


        initGroup()
    }

init()