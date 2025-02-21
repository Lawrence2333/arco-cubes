interface ResponsiveLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  gap?: number;
}

export const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({
  leftContent,
  rightContent,
  gap = 12, // 默认值，可以从theme中获取
}) => {
  return (
    <div
      className="w-full flex-1 flex flex-col pc:flex-row"
      style={{ gap: `20px` }}
    >
      {/* 左侧/顶部容器 */}
      <div className="flex w-full h-full pc:w-2/5 xl:overflow-hidden xl:bottom-0 items-center justify-center pc:items-start pc:justify-start">
        <div
          className="flex w-full flex-col pc:fixed pc:pt-24 pc:w-2/5"
          style={{ gap: `0px` }}
        >
          {leftContent}
        </div>
      </div>

      {/* 右侧/底部容器 */}
      <div className="flex flex-1 items-center justify-center">
        <div
          className="pc:max-w-[576px] flex flex-col pc:pt-24"
          style={{ gap: `${gap}px` }}
        >
          {rightContent}
        </div>
      </div>
    </div>
  );
};
