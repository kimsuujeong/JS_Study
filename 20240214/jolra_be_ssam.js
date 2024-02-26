
	// 최소 비용으로 모든 섬을 연결하는 다리 찾기
	// 최소 신장 트리(MST, Minimum Spanning Tree)
	// >> 크루스칼 알고리즘 (MST 구현 알고리즘)
	// 그래프의 간선을 하나씩 늘리며 MST를 만든다. 간선을 늘릴 때 가중치가 최소인 간선부터 추가하는 탐욕법을 이용한다.
	// (탐욕법 : 현재 상태에서 최적의 선택지를 사용)
	
	function main(args){
		let n = 4;    // 섬의 개수
		let costs = [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [2, 3, 8]];    // 섬을 잇는 간선 {정점1, 정점2, 비용}

		let c = new C01_jolra_be_ssam();
		console.log(c.jolra_be_ssam(n, costs));
	}
		
	// MST 합치기
	function union(parent, x, y) {
		x = this.find(parent, x);   // x 부모 찾기
		y = this.find(parent, y);   // y 부모 찾기

		// 둘중에 작은 쪽을 부모로 설정.
		if (x < y) parent[y] = x;
		else parent[x] = y;
	}
	
	// 부모 노드 찾기
	function find(parent, x) {
		// 부모노드가 x값과 같다면 x값 돌려주고
		// 그렇지 않다면 부모값으로 설정되어 있는 값으로 다시 찾는다.
		if (parent[x] === x) return x;
		else return this.find(parent, parent[x]);
	}

	function jolra_be_ssam(n, costs) {
		// 비용을 기준으로 간선을 오름차순 정렬
		costs.sort((a, b) => a[2] - b[2]);
		// Arrays.sort(costs, (o1, o2) -> o1[2] - o2[2]);

		// 각 정점의 부모 노드를 설정하기위해 일단 부모 노드 초기화
		// 초기값은 자기 자신이 부모 노드
		let parent = [];

		for (let i = 0; i <= n; i++) {
			parent[i] = i;
		}

		let minCost = 0;    // 결과 추출 변수

		// 2) 간선을 하나씩 살핀다. 간선을 MST에 추가했을 때 MST에 사이클이 생기지 않으면 추가한다.
		// 사이클이 생긴다면 추가하지 않고 다음 간선으로 넘어간다.
		for (let i = 0; i < costs.length; i++) {
			// 각 정점(섬)의 부모가 같지 않을 때만
			// 각 정점이 같은 부모 노드를 가진다면 해당 정점을 잇는 간선은 MST에 추가하지 않는다. (사이클 방지)
			if (find(parent, costs[i][0]) !== find(parent, costs[i][1])) {
				// 부모 노드가 다르므로 이 간선을 MST에 추가했을 때 사이클이 생기지 않는다. 따라서 추가가 가능.
				// 비용을 추가
				minCost += costs[i][2];
				// 해당 정점[0]와 [1]을 union()을 수행하여 같은 MST 추가
				union(parent, costs[i][0], costs[i][1]);
			}
		}

		return minCost;
		
	}
