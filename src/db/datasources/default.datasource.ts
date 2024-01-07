import { DataSource } from 'typeorm';
import { getDefaultTypeormConfig } from '../../config/typeorm.config';

export default new DataSource(getDefaultTypeormConfig());
