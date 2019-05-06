/**
 * some methods 
 */
import Store from '../store';

/**
 * @desc string = array, interval
 */

export class NPCTalk {
	static strEqualArr(_str: string) {
		if (Store.state.npc.timer) {
			clearInterval(Store.state.npc.timer);
			Store.commit('npc/setTimer', null);
		}
        let _i = 0;
		let _arr = _str.split('');
		let _txt: string = '';

		return new Promise((resolve, reject) => {
			Store.commit(
				'npc/setTimer',
				setInterval(() => {
					if (_txt.length != _arr.length) {
						_txt += _arr[_i];
                        _i++;
						Store.commit('npc/saveTalkVal', _txt);
					} else {
                        setTimeout(() => {
                            resolve();
                        }, 500);
						clearInterval(Store.state.npc.timer);
						Store.commit('npc/setTimer', null);
					}
				}, 210)
            );
		});
	}
}
