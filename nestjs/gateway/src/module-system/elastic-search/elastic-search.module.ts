import { Global, Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import {
    ELASTISEARCH_NODE,
    ELASTISEARCH_PASSWORD,
    ELASTISEARCH_USERNAME,
} from 'src/common/constants/app.constant';

@Global()
@Module({
    imports: [
        ElasticsearchModule.register({
            node: ELASTISEARCH_NODE,
            auth: {
                username: ELASTISEARCH_USERNAME as string,
                password: ELASTISEARCH_PASSWORD as string,
            },
            tls: {
                // Bỏ qua xác thực chứng chỉ SSL
                rejectUnauthorized: false,
            },
        }),
    ],
    exports: [ElasticsearchModule],
})
export class ElasticSearchModule { }
