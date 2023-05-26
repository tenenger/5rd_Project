import { Fragment } from 'react';

import { Line, Modal } from 'components/common';
import { MainIcon, MeasureLocationIcon } from 'components/common/icons';
import { useDustModal } from 'hooks';
import { getDustMessageFromGrade } from 'utils/dust';

import {
  SChartArea,
  SChartDetail,
  SDescription,
  SDustArea,
  SDustValueArea,
  SLocationArea,
  SLogo,
  SNoticeArea,
  SPollutionArea,
  SStation,
  SStatus,
  STitle,
  SValue,
} from './DustModal.style';

const DustModal = () => {
  const {
    sidoDust: {
      dataTime,
      sidoName,
      stationName,
      mangName,
      khaiGrade,
      khaiValue,
      so2Grade,
      so2Value,
      coGrade,
      coValue,
      o3Grade,
      o3Value,
      no2Grade,
      no2Value,
      pm25Grade1h,
      pm25Value,
      pm10Grade1h,
      pm10Value,
    },
    handleCloseClick,
    isOpen,
  } = useDustModal();
  const DustAreaData = [
    { title: '미세먼지', value: pm10Value, status: getDustMessageFromGrade(+pm10Grade1h) },
    { title: '초미세먼지', value: pm25Value, status: getDustMessageFromGrade(+pm25Grade1h) },
  ];
  const ChartAreaData = [
    { title: '오존', value: o3Value, status: getDustMessageFromGrade(+o3Grade) },
    { title: '일산화탄소', value: coValue, status: getDustMessageFromGrade(+coGrade) },
    { title: '아황산가스', value: so2Value, status: getDustMessageFromGrade(+so2Grade) },
    { title: '이산화질소', value: no2Value, status: getDustMessageFromGrade(+no2Grade) },
    { title: '통합대기환경', value: khaiValue, status: getDustMessageFromGrade(+khaiGrade) },
  ];

  return (
    <Modal handleCloseClick={handleCloseClick} isOpen={isOpen}>
      <SLocationArea>
        <STitle>
          {sidoName} {stationName}
          <MeasureLocationIcon />
        </STitle>
        <span>{dataTime} 업데이트</span>
      </SLocationArea>
      <SDustArea>
        <SDustValueArea>
          {DustAreaData.map(({ title, value, status }, idx) => (
            <Fragment key={title}>
              {idx % 2 === 1 && <Line height="40px" width="0.5px" />}
              <div>
                <STitle>{title}</STitle>
                <div>
                  <SValue>{value}</SValue>
                  <SStatus>{status.message}</SStatus>
                </div>
              </div>
            </Fragment>
          ))}
        </SDustValueArea>
        <Line />
        <SNoticeArea>
          <div>
            <SStation>
              <MainIcon />
              {stationName} 측정소
            </SStation>
            <SLogo url="/images/logo/keco.png">한국환경공단</SLogo>
          </div>
          <SDescription>
            한국환경공단이 제공하는 측정 정보 중 &quot;{mangName}&quot; 측정정보를 활용하고 있으며, 이는 시/도
            보건환경연구원에서 운영하는 측정소의 베타선법으로 측정한 정보입니다.
          </SDescription>
        </SNoticeArea>
      </SDustArea>
      <SPollutionArea>
        <STitle>오염물질</STitle>
        <Line />
        <SChartArea>
          {ChartAreaData.map(({ title, value, status }) => (
            <SChartDetail key={title} color={status.bgColor} colorIdx={status.bgColorIdx}>
              <SValue>{value}</SValue>
              <SStatus>{status.message}</SStatus>
              <STitle>{title}</STitle>
            </SChartDetail>
          ))}
        </SChartArea>
      </SPollutionArea>
    </Modal>
  );
};

export default DustModal;
