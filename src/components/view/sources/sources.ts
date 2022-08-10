import { SourcesNews } from '../../types/main';
import './sources.css';

class Sources {
    draw(data: SourcesNews[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLMetaElement;

        data.forEach((item: SourcesNews) => {
            const sourceClone = (sourceItemTemp.content as unknown as DocumentFragment).cloneNode(true) as HTMLElement;

            sourceClone!.querySelector('.source__item-name')!.textContent = item.name;
            sourceClone!.querySelector('.source__item')!.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone!);
        });

        document.querySelector('.sources')!.append(fragment);
    }
}

export default Sources;
